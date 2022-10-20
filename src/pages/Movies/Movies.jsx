import { Outlet } from "react-router-dom"
import MoviesSearch from "components/MoviesSearch/MoviesSearch"

export default function Movies() {
    return (
        <>
            <div>
                <MoviesSearch />
            </div>
            <Outlet />
        </>
    )
}
