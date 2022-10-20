import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'shared/api/gettingData';
import Loader from 'shared/Loader/Loader';
import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import FilmList from 'components/FilmList/FilmList';


export default function MoviesSearch() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("query")

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const data = await getMoviesByQuery(searchQuery);
                setItems(data.results);
            } catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }
        if (searchQuery) {
            fetchPosts()
        }
    }, [searchQuery]);


    const onSearch = ({ search }) => {
        setSearchParams({ query: search });
        // setItems([])
    }
    const isFilms = Boolean(items.length);
    return (
        <>
            {loading && <Loader />}
            {error && <p>Somthing went wrong!</p>}
            <MoviesSearchForm onSubmit={onSearch} />
            {isFilms && <FilmList items={items} />}
        </>
    )
}