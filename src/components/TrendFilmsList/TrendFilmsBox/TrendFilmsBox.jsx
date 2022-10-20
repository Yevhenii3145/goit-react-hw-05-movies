import { Link, useLocation } from "react-router-dom";

export default function TrendFilmsBox({ items }) {
    const location = useLocation();
    const elements = items.map(({ id, title }) => {
        return (
            <li key={id}><Link state={{ from: location }} to={`/movies/:${id}`}>{title}</Link></li>
        )
    })

    return (
        <ul>{elements}</ul>
    )
}
