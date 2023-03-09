import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        try {
            getMovieReviews(Number(movieId)).then(response =>
                setReviews(response.data.results)
            );
        } catch (error) {
            console.log(error);
        }
    }, [movieId]);

    return (
        <section>
            {reviews ? (
                <ul>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <h4>Author: {author}</h4>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>We don't have any reviews for this movie.</p>
            )}
        </section>
    );
}