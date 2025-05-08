import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                {/* Here, we wrap the outlet with a container for consistent spacing */}
                <Outlet />
            </div>
            {/* If you need a footer */}
            <footer className="bg-dark text-white text-center py-3 mt-4">
                <p>&copy; 2025 Your Website. All Rights Reserved.</p>
            </footer>
        </>
    )
}

export default Layout
