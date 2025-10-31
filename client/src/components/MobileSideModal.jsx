import "./MobileSideModal.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Blocks } from "./Blocks.jsx";

export const MobileSideModal = ({ handleModal }) => {
    const [isClosing, setIsClosing] = useState(false);

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            handleModal();
        }, 400);
    };

    // Define middle rows
    const middleRows = { 
        type: "oakplanks", 
        special: (i) => (i === 0 ? "wood" : null),
    }

    return (
        <>
            <div className="mobile-side-modal-blur" onClick={closeModal}>
                <div onClick={(e) => e.stopPropagation()} className={`${isClosing ? "slide-right-fade" : "slide-left-fade"}`}>
                    <Blocks rowsConfig={[middleRows, "cobblestone"]} repeatIndex={0} fixedCols={6} fixedRows={Math.ceil(window.innerHeight / 32)}>
                        <div className="mobile-side-modal-content">
                            <NavLink to="/" className={"nav-link"}>Home</NavLink>
                            <NavLink to="/about" className={"nav-link"}>About</NavLink>
                            <NavLink to="/projects" className={"nav-link"}>Projects</NavLink>
                            <NavLink to="/education" className={"nav-link"}>Education</NavLink>
                            <NavLink to="/services" className={"nav-link"}>Services</NavLink>
                            <NavLink to="/contact" className={"nav-link"}>Contact</NavLink>
                        </div>
                    </Blocks>
                </div>
            </div>
        </>
    );
}