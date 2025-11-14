import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { MobileSideModal } from "./components/MobileSideModal.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Projects } from "./pages/Projects.jsx";
import { ProjectDetails } from "./pages/details/ProjectDetails.jsx";
import { Education } from "./pages/Education.jsx";
import { EducationDetails } from "./pages/details/EducationDetails.jsx";
import { Services } from "./pages/Services.jsx";
import { ServiceDetails } from "./pages/details/ServiceDetails.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Login } from "./pages/auth/Login.jsx";
import { Register } from "./pages/auth/Register.jsx";
import { getProjects, getEducations, getServices } from "./utils/api.js";

export const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const toast = location.state?.toast;

    // Old Data
    const projectsOLD = [
        { title: "Green Fits Site", description: "A web for searching videos from youtuber Green Fits. Role: Lead Developer", img: "/projects/proj1.png", techs: ["React", "AWS", "Lambda", "S3", "API Gateway", "Dynamodb"], link: "https://www.greenfitsite.com/" },
        { title: "Adventure Time Card Wars [WIP]", description: "Card Wars Adventure Time TCG multiplayer game. Role: Lead Developer", img: "/projects/proj2.png", techs: ["Unity", "C#", "WebSockets", "TCP/UDP"], link: "https://noa-dev.itch.io/cardwars-duels" },
        { title: "Uruguay Oscuro", description: "A simple web dedicated to Uruguayan memes. Role: Lead Developer", img: "/projects/proj3.png", techs: ["React", "Vite", "CSS", "JavaScript"], link: "https://github.com/JulianSellanes/uruguay-oscuro" },
    ];

    const educationOLD = [
        { school: "A+", degree: "Videogames Course Diploma", years: "2015-2016" },
        { school: "Unionville High School", degree: "High School Diploma", years: "2020-2023" },
        { school: "Centennial College", degree: "Software Engineering Technology", years: "2024-Present" },
        { school: "Self‑Directed", degree: "Fullstack Dev", years: "Ongoing" },
    ];

    const servicesOLD = [
        { title: "Frontend Development", img: "/services/frontend.png", techs: ["React", "Vite", "Html", "CSS", "Javascript"] },
        { title: "Backend Development", img: "/services/backend.png", techs: ["Python", "AWS", "Express", "Github"] },
        { title: "Game Development", img: "/services/unity.png", techs: ["C#", "Shaders", "Python", "Unity", "Blender"] },
    ];

    const getUserFromStorage = () => {
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        const role = localStorage.getItem("role");
    
        return token && username ? { username, role: role || "user" } : null;
    }

    const [isMobileSideModalOpen, setMobileSideModalOpen] = useState(false);
    const [user, setUser] = useState(getUserFromStorage());
    const [projects, setProjects] = useState([]);
    const [education, setEducation] = useState([]);
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        setUser(getUserFromStorage());
    }, [])
    
    const handleLogout = async () => {
        try {
            const response = await fetch("/api/auth/logout", {
                method: "GET",
            })

            if(!response.ok) throw new Error("Failed to logout");

            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("role");
            setUser(null);
            setProjects([]);
            setEducation([]);
            setServices([]);
        } catch (error) {
            console.error("Logout error:", error);
        }
    }

    const fetchProjects = async () => {
        const data = await getProjects();
        if (data) setProjects(data);
    }

    const fetchEducation = async () => {
        const data = await getEducations();
        if (data) setEducation(data);
    }

    const fetchServices = async () => {
        const data = await getServices();
        if (data) setServices(data);
    }

    useEffect(() => {
        // fetchProjects();
        // fetchEducation();
        // fetchServices();
    }, [navigate]);

    return (
        <div className="app">
            {
                isMobileSideModalOpen && (
                    <MobileSideModal handleModal={() => setMobileSideModalOpen(!isMobileSideModalOpen)} user={user} handleLogout={handleLogout} />
                )
            }
            {
                toast && (
                    <div className="generic-green-box toast">
                        <p>Thanks! {toast}</p>
                    </div>)
            }

            <Navbar handleMobileSideModal={() => setMobileSideModalOpen(!isMobileSideModalOpen)} user={user} handleLogout={handleLogout} />

            <main>
                <Routes>
                    <Route path="/" element={<Home user={user} projects={projectsOLD} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects user={user} projects={projectsOLD} refreshProjects={fetchProjects} />} />
                    <Route path="/project-details/:id?" element={<ProjectDetails refreshProjects={fetchProjects} />} />
                    <Route path="/education" element={<Education user={user} education={educationOLD} refreshEducation={fetchEducation} />} />
                    <Route path="/education-details/:id?" element={<EducationDetails refreshEducation={fetchEducation} />} />
                    <Route path="/services" element={<Services user={user} services={servicesOLD} refreshServices={fetchServices} />} />
                    <Route path="/service-details/:id?" element={<ServiceDetails refreshServices={fetchServices} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    <Route path="/register" element={<Register setUser={setUser} />} />
                    <Route path="*" element={<Home user={user} projects={projectsOLD} />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}