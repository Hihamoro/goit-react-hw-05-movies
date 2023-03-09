import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/api';

export default function Home() {
    const [trendingMovies, setTrendingMovies] = useState();
    const location = useLocation()

    useEffect(() => {
        getTrendingMovies().then(response =>
            setTrendingMovies(response.data.results)
        );
    }, []);

    return (
        <section>
            <h2>Trending today</h2>
            <ul>
                {trendingMovies &&
                    trendingMovies.map(({ id, title }) => (
                        <li key={id}>
                            <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                        </li>
                    ))}
            </ul>
        </section>
    );
}