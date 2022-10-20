import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { getMovieById } from '../../shared/api/gettingData'
import Loader from '../../shared/Loader/Loader'


export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { movieId } = useParams();
    const id = movieId.includes(':') ? Number(movieId.slice(1, movieId.length)) : movieId;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from ?? "/movies";

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getMovieById(id);
                setMovie(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovie();
    }, [id]);

    const goBack = () => navigate(from);

    if (!movie) {
        return;
    }

    const genres = movie.genres.map(({ id, name }) => {
        return (
            <li key={id} style={{ marginRight: "20px" }}>{name}</li >
        )
    })

    const isCastPage = location.pathname.includes("cast");
    const castLink = isCastPage ? `/movies/:${id}` : `/movies/:${id}/cast`;
    const isReviewsPage = location.pathname.includes("reviews");
    const reviewsLink = isReviewsPage ? `/movies/:${id}` : `/movies/:${id}/reviews`;

    return (
        <>
            <div>
                <button style={{ marginBottom: '20px', marginLeft: '20px' }} onClick={goBack}>Go back</button>
                {loading && <Loader />}
                {error && <p>Something went wrong ((</p>}
                {movie && (<>
                    <div style={{ display: "flex" }}>
                        <img style={{ marginRight: "40px" }}
                            width="250"
                            src={`https://image.tmdb.org/t/p/w500/${movie["poster_path"]}`}
                            alt={movie.title}
                        />
                        <div>
                            <h2>{movie.title}</h2>
                            <p>User Score: {movie.popularity} %</p>
                            <h3>Overwiew</h3>
                            <p>{movie.overview}</p>
                            <h3>Genres</h3>
                            <ul style={{ listStyle: "none", display: "flex" }}>{genres}</ul>
                        </div>
                    </div>

                    <ul>
                        <li><Link state={{ from }} to={castLink}>Cast</Link></li>
                        <li><Link state={{ from }} to={reviewsLink}>Reviews</Link></li>
                    </ul>

                </>)}
            </div>
            <Suspense fallback={<div>Loading...</div>} >
                <Outlet />
            </Suspense>

        </>
    )
}
