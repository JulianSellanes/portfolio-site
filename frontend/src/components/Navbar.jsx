import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { calcCols, getOffsetForWidth, makeRow } from "../utils/rowMaker.jsx";
import { Logo } from './Logo.jsx';

export const Navbar = () => {
    const [cols, setCols] = useState(calcCols(getOffsetForWidth(window.innerWidth)));
    
    useEffect(() => {
        const onResize = () => setCols(calcCols(getOffsetForWidth(window.innerWidth)));
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const woodRow = makeRow(cols, "oakplanks", {
        special: (i, cols) => (i === 0 || i === cols - 1 ? "wood" : null),
    });

    const cobblestoneRow = makeRow(cols, "cobblestone");

    return (
        <div className="nav">
            <div className="nav-inner">
                <div className="nav-grid" style={{ gridTemplateColumns: `repeat(${cols}, 32px)` }}>
                    {woodRow}
                    {woodRow}
                    {woodRow}
                    {cobblestoneRow}
                </div>

                <div className="nav-content">
                    <Link to="/" className="logo">
                        <Logo size={72}/>
                    </Link>

                    <div className="nav-links-group">
                        <NavLink to="/" className={"nav-link"}>Home</NavLink>
                        <NavLink to="/about" className={"nav-link"}>About</NavLink>
                        <NavLink to="/projects" className={"nav-link"}>Projects</NavLink>
                        <NavLink to="/education" className={"nav-link"}>Education</NavLink>
                        <NavLink to="/services" className={"nav-link"}>Services</NavLink>
                        <NavLink to="/contact" className={"nav-link"}>Contact</NavLink>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}