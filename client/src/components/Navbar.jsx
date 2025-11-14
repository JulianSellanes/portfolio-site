import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { Blocks } from "./Blocks.jsx";
import { Logo } from "./Logo.jsx";

export const Navbar = ({ handleMobileSideModal, user, handleLogout }) => {
    // Define middle rows
    const middleRows = { 
        type: "oakplanks", 
        special: (i, cols) => (i === 0 || i === cols - 1 ? "wood" : null),
    }

    return (
        <div className="nav">
            <Blocks rowsConfig={[middleRows, "cobblestone"]} repeatIndex={0}>
                <div className="nav-content">
                    <Link to="/" className="logo">
                        <Logo size={72}/>
                    </Link>

                    <button className="generic-green-box burger-bttn" onClick={handleMobileSideModal}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </button>

                    <div className="nav-links-group">
                        <NavLink to="/" className={"nav-link"}>Home</NavLink>
                        <NavLink to="/about" className={"nav-link"}>About</NavLink>
                        <NavLink to="/projects" className={"nav-link"}>Projects</NavLink>
                        <NavLink to="/education" className={"nav-link"}>Education</NavLink>
                        <NavLink to="/services" className={"nav-link"}>Services</NavLink>
                        <NavLink to="/contact" className={"nav-link"}>Contact</NavLink>
                        {user ? (
                            <NavLink to="/logout" className={"nav-link"} onClick={handleLogout}>Logout</NavLink>
                        ) : (
                            <>
                                <NavLink to="/login" className={"nav-link"}>Login</NavLink>
                                <NavLink to="/register" className={"nav-link"}>Register</NavLink>
                            </>
                        )}
                    </div>
                </div>
            </Blocks>
        </div>
    );
}