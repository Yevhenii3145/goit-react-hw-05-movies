import { NavLink } from 'react-router-dom';
import styles from './navbar.module.scss'

export default function Navbar() {
    const getClassName = ({ isActive }) => {
        return isActive ? `${styles.link} ${styles.active}` : `${styles.link}`;
    }

    return (
        <div className={styles.menu}>
            <NavLink className={getClassName} to="/" end>Home</NavLink>
            <NavLink className={getClassName} to="/movies">Movies</NavLink>
        </div>
    )
}
