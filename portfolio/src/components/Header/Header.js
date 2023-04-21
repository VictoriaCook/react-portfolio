import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

export default function Navbar() {

    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
    }, [location])
    return (

        <div className="navbar" id={expandNavbar ? "open" : "closed"}>
            <div className="toggleButton">
                <button onClick={() => { setExpandNavbar((prev) => !prev) }}>
                    {/* <ReorderIcon /> */}
                </button>
            </div>
            <div className="NavLinks">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/resume">Resume</NavLink>
            </div>
        </div >
    )
}