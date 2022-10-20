import { useState, useEffect, useRef } from "react";
import Loader from "shared/Loader/Loader";
import { getTrendingFilms } from "shared/api/gettingData";
import TrendFilmsBox from "./TrendFilmsBox/TrendFilmsBox";


const TrendFilmsList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [page, setPage] = useState(1);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (!isFirstRender.current) {
            return;
        }
        const fetchFilms = async () => {
            try {
                setLoading(true);
                const data = await getTrendingFilms();
                setItems([...data.results]);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchFilms();
        isFirstRender.current = false;
    }, [setItems])

    return (
        <div>
            {loading && <Loader />}
            {Boolean(items.length) && <TrendFilmsBox items={items} />}
            {error && <p>TrendFilm list loading failed</p>}
        </div>
    )
}

export default TrendFilmsList;