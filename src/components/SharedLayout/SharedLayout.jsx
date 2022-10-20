import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "components/Navbar/Navbar"

export default function SharedLayout() {
    return (
        <>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>} >
                <Outlet />
            </Suspense>
        </>
    )
}
