// This is our navbar componenet
import React from 'react';
import './navbar.css'; 
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div>
                    <a href="/" className="navbar-logo">
                        SprintCraft
                    </a>
                </div>
                <div className="navbar-links">
                    
                    <Link to="/" className="navbar-link">
                        Home
                    </Link>
                    <Link to="/about" className="navbar-link">
                        About
                    </Link>
                    <Link to="/contact" className="navbar-link">
                        Contact
                    </Link>
                    <Link to="/login" className="navbar-link">
                        Login
                    </Link>
                    <Link to="/signup" className="navbar-link">
                     Sign Up
                    </Link>
                    <Link to="/work" className="navbar-link">
                     Work
                    </Link>
                </div>
                <button className="navbar-button">
                    <svg
                        className="navbar-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
