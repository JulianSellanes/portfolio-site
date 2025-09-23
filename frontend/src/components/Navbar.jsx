// import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import { Logo } from './Logo.jsx'

const linkStyle = ({isActive})=>({
    textDecoration:'none',
    fontFamily:'Press Start 2P, monospace',
    fontSize:'.8rem',
    borderBottom: isActive ? '4px solid #4CAF50' : '4px solid transparent',
    padding:'8px 10px',
})

export const Navbar = () => {

    return (
        <div className="nav">
            <div className="nav-inner container">
                <Link to="/" className="logo-wrap" aria-label="Home">
                    <Logo size={34}/>
                    <span style={{fontFamily:'Press Start 2P, monospace'}}>JULIÁN</span>
                </Link>
                
                <div className="spacer" />

                <NavLink to="/" style={linkStyle}>Home</NavLink>
                <NavLink to="/about" style={linkStyle}>About</NavLink>
                <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
                <NavLink to="/education" style={linkStyle}>Education</NavLink>
                <NavLink to="/services" style={linkStyle}>Services</NavLink>
                <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
            </div>
        </div>
    );
}