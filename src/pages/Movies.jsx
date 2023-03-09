import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBox from 'components/SearchBox';
import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchingMovies } from 'services/api';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const location = useLocation()

    useEffect(() => {
        if (query === '') {
            return;
        }
        try {
            getSearchingMovies(query).then(response => {
                if (response.data.results.length === 0) {
                    toast.error(
                        'Sorry, there are no movies matching your search query. Please try again.'
                    );
                }
                setMovies(response.data.results);
            });
        } catch (error) {
            console.log(error);
        }
    }, [query]);

    const handleSubmitForm = event => {
        event.preventDefault();
        const value = event.currentTarget.elements.query.value;
        setSearchParams(value !== '' ? { query: value } : {});
        setMovies([]);
        event.currentTarget.reset();
    };

    return (
        <section>
            <SearchBox onSubmit={handleSubmitForm} />
            {movies.length > 0 && <MoviesList movies={movies} state={{ from: location }} />}
            <ToastContainer />
        </section>
    );
}