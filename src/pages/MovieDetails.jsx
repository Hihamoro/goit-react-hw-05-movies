import { useEffect, useState } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import BackLink from 'components/BackLink';
import { getMovieById } from 'services/api';
import image from '../utilities/img/image.png'
import { Wrapper, WrapperLink, WrapperText, LinkDetails } from '../styled/MovieDetails.styled';

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const subLocation = location.state?.from

    useEffect(() => {
        try {
            getMovieById(Number(movieId)).then(response => {
                setMovie(response.data);
            });
        } catch (error) {
            console.log(error);
        }
    }, [movieId]);

    if (!movie) {
        return null;
    }

    const backLinkHref = location.state?.from ?? '/';

    const {
        original_title,
        release_date,
        vote_average,
        overview,
        genres,
        poster_path,
    } = movie;

    const getGenresString = genres => {
        const genresArr = [];
        genres.map(genre => genresArr.push(genre.name));
        return genresArr.join(' ');
    };

    const releaseYear = release_date.slice(0, 4);
    const userScore = Math.round(vote_average * 10);
    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <section>
            <BackLink to={backLinkHref}>Go back</BackLink>
            {movie && (
                <div>
                    <Wrapper>
                        <div>
                            <img src={poster_path ? poster : image} alt={original_title} width="300px" />
                        </div>

                        <WrapperText>
                            <h2>
                                {original_title} ({releaseYear})
                            </h2>
                            <p>User score: {userScore}%</p>
                            <h3>Overview</h3>
                            <p>{overview}</p>
                            <h4>Genres</h4>
                            <p>{getGenresString(genres)}</p>
                        </WrapperText>
                    </Wrapper>

                    <WrapperLink>
                        <p>Additional information</p>
                        <ul>
                            <li>
                                <LinkDetails key="cast" to="cast" state={{ from: subLocation }}>Cast</LinkDetails>
                            </li>
                            <li>
                                <LinkDetails key="reviews" to="reviews" state={{ from: subLocation }}>Reviews</LinkDetails>
                            </li>
                        </ul>
                        <Outlet />
                    </WrapperLink>
                </div>
            )}
        </section>
    );
}