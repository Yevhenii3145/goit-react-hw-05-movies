import { useLocation, Link } from 'react-router-dom';

export default function FilmList({ items }) {
    const location = useLocation();
    const elements = items.map(({ id, title }) => (
        <li key={id}><Link state={{ from: location }} to={`/movies/${id}`}>{title}</Link></li>
    ));

    return <ul>{elements}</ul>
}