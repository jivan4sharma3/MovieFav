import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">MovieFav</div>

                <input type="checkbox" id="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>

                    <li><Link to="/login" className="login">Login</Link></li>
                    <li><Link to="/signup" className="signup">Sign Up</Link></li>
                </ul>
            </div>
        </nav >

    )
}

export default Navbar
