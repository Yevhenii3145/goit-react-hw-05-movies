import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

const Cast = lazy(() => import('pages/Cast/Cast'))
const Reviews = lazy(() => import('pages/Reviews/Reviews'))

export default function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/:movieId" element={<MovieDetails />}>
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </div>
    )
}
