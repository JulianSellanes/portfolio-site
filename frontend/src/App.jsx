import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Projects } from "./pages/Projects.jsx";
import { Education } from "./pages/Education.jsx";
import { Services } from "./pages/Services.jsx";
import { Contact } from "./pages/Contact.jsx";

export const App = () => {
    const location = useLocation()
    const toast = location.state?.toast

    return (
        <div className="app">
            <Navbar />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}