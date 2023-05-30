import { Outlet } from 'react-router-dom'
import './Layout.css'
import Navbar from './NavBar'

export default function Layout() {
    return (
        <>
            <header>
                <h1>@Contatinhos</h1>
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <footer>
                    <p>Copyright 2023</p>
                </footer>
            </header>
        </>
    )
}