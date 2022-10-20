import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Loader from 'shared/Loader/Loader';
import { getCastsById } from '../../shared/api/gettingData'

export default function Cast() {
    const [casts, setCasts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { movieId } = useParams();
    const id = movieId.includes(':') ? Number(movieId.slice(1, movieId.length)) : movieId;

    useEffect(() => {
        const fetchCasts = async () => {
            try {
                setLoading(true);
                const data = await getCastsById(id)
                setCasts(data.cast)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchCasts();
    }, [id])

    if (!casts) {
        return null;
    }

    const avatarStyle = {
        outline: "1px solid red",
        backgroundColor: "blue",
        width: "250px",
        height: "375px",
        marginTop: "0px",
        textAlign: "center",
        color: "gold",

    }
    const elements = casts.map(({ id, name, character, profile_path: avatar }) => (
        <li style={{ backgroundColor: "gold", borderStyle: 'outset' }} key={id}>
            {avatar && <img
                width="250"
                src={`https://image.tmdb.org/t/p/w500/${avatar}`}
                alt={name}
            />}
            {!avatar && <p style={avatarStyle}>No foto ((</p>}
            <p>{name}</p>
            <p style={{ maxWidth: "230px" }}>Сharacter: {character}</p>
        </li>
    )
    )

    return (
        <>
            <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none" }}>{elements}</ul>
            {loading && <Loader />}
            {error && <p>Something wrong</p>}
        </>
    )
}
