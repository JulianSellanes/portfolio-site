import "./Home.css";
import { Link } from "react-router-dom";
import { Blocks } from "../components/Blocks.jsx";
import { PixelCard } from "../components/PixelCard.jsx";

export const Home = ({ projects = [] }) => {
    const msg = JSON.parse(localStorage.getItem("lastContact") || "null");

    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="home-content">
                    <h1 className="generic-title">Welcome to my Portfolio</h1>
                    <h3 className="home-mission">Mission: My mission is to learn as much as I can about software engineering, work as hard as I can and save a lot, so that one day I can start my own company/entrepreneurship! :)</h3>
                    
                    <div className="home-bttns-group">
                        <Link className="generic-green-box green-bttn" to="/about">About Me</Link>
                        <Link className="generic-green-box green-bttn" to="/projects">Projects</Link>
                    </div>
                </div>
            </Blocks>

            {
                projects.length > 0 && (
                <>
                    <div className="empty-space" />

                    <Blocks rowsConfig={["spruceplanks"]}>
                        <div className="home-cards">
                        {
                            projects.map((p, index)=> (
                                <PixelCard key={index} title={p.title} subtitle={p.subtitle} img={p.img} techs={p.techs} ctaText="Open" ctaHref={p.link} fixedRows={16}></PixelCard>
                            ))
                        }
                        </div>
                    </Blocks>
                </>)
            }

            {
                msg && (
                <>
                    <div className="empty-space" />

                    <Blocks rowsConfig={["birchplanks"]}>
                        <div className="home-last">
                            <div className="generic-green-box last-card">
                                <h3>Last message received:</h3>
                                <pre>{JSON.stringify(msg, null, 2)}</pre>
                            </div>
                        </div>
                    </Blocks>
                </>)
            }

            <div className="empty-space" />
        </>
    );
}