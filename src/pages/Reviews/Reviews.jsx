import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Loader from 'shared/Loader/Loader';
import { getReviewsById } from '../../shared/api/gettingData'

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { movieId } = useParams();
    const id = movieId.includes(':') ? Number(movieId.slice(1, movieId.length)) : movieId;

    useEffect(() => {
        const fetchCasts = async () => {
            try {
                setLoading(true);
                const data = await getReviewsById(id)
                setReviews(data.results)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchCasts();
    }, [id])

    const elements = reviews?.map(({ id, author, content }) => {
        return (
            <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
            </li>
        )
    })

    return (
        <div style={{ backgroundColor: 'lightyellow' }}>
            {reviews && <ul>{elements}</ul>}
            {!reviews.length && <p>No reviews</p>}
            {loading && <Loader />}
            {error && <p>Something wrong</p>}
        </div>
    )
}
