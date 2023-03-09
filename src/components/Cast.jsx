import { getMovieCredits } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import image from '../utilities/img/image.png';

export default function Cast() {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        try {
            getMovieCredits(Number(movieId)).then(response =>
                setCast(response.data.cast)
            );
        } catch (error) {
            console.log(error);
        }
    }, [movieId]);

    if (!cast) {
        return [];
    }

    return (
        <ul>
            {cast.map(({ id, profile_path, name, character }) => (
                <li key={id}>
                    <img
                        src={
                            profile_path
                                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                                : image
                        }
                        alt={name}
                        width="100px"
                    />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>
            ))}
        </ul>
    );
}