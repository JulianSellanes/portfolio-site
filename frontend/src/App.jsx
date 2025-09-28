import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Projects } from "./pages/Projects.jsx";
import { Education } from "./pages/Education.jsx";
import { Services } from "./pages/Services.jsx";
import { Contact } from "./pages/Contact.jsx";

export const App = () => {
    const location = useLocation();
    const toast = location.state?.toast;

    // Data
    const projects = [
        { title: "Green Fits Site", subtitle: "A web for searching videos from youtuber Green Fits. Role: Lead Developer", img: "/projects/proj1.png", techs: ["React", "AWS", "Lambda", "S3", "API Gateway", "Dynamodb"], link: "https://www.greenfitsite.com/" },
        { title: "Adventure Time Card Wars [WIP]", subtitle: "Card Wars Adventure Time TCG multiplayer game. Role: Lead Developer", img: "/projects/proj2.png", techs: ["Unity", "C#", "WebSockets", "TCP/UDP"], link: "https://noa-dev.itch.io/cardwars-duels" },
        { title: "Uruguay Oscuro", subtitle: "A simple web dedicated to Uruguayan memes. Role: Lead Developer", img: "/projects/proj3.png", techs: ["React", "Vite", "CSS", "JavaScript"], link: "https://github.com/JulianSellanes/uruguay-oscuro" },
    ];

    const education = [
        { school: "A+", degree: "Videogames Course Diploma", years: "2015-2016" },
        { school: "Unionville High School", degree: "High School Diploma", years: "2020-2023" },
        { school: "Centennial College", degree: "Software Engineering Technology", years: "2024-Present" },
        { school: "Self‑Directed", degree: "Fullstack Dev", years: "Ongoing" },
    ];

    const services = [
        { title: "Frontend Development", img: "/services/frontend.png", techs: ["React", "Vite", "Html", "CSS", "Javascript"] },
        { title: "Backend Development", img: "/services/backend.png", techs: ["Python", "AWS", "Express", "Github"] },
        { title: "Game Development", img: "/services/unity.png", techs: ["C#", "Shaders", "Python", "Unity", "Blender"] },
    ];

    return (
        <div className="app">
            {
                toast && (
                    <div className="generic-green-box toast">
                        <p>Thanks! {toast}</p>
                    </div>)
            }

            <Navbar />

            <main>
                <Routes>
                    <Route path="/" element={<Home projects={projects} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects projects={projects} />} />
                    <Route path="/education" element={<Education education={education} />} />
                    <Route path="/services" element={<Services services={services} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Home projects={projects} />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}