import "./Home.css";
import { Link } from "react-router-dom";
import { Blocks } from "../components/Blocks.jsx";
import { PixelCard } from "../components/PixelCard.jsx";

export const Home = ({ user, projects = [] }) => {
    const msg = JSON.parse(localStorage.getItem("lastContact") || "null");

    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="home-content">
                    <h1 className="generic-title">Welcome to my Portfolio</h1>
                    {user && <p className="generic-p">I hope you have a good day, {user.username}!</p>}
                    <p className="generic-p">Mission: My mission is to continuously learn and grow as a software engineer, work with dedication, and save diligently, so that one day I can build and lead my own company! :)</p>
                    
                    <div className="home-bttns-group">
                        <Link className="generic-green-box green-bttn" to="/about">About Me</Link>
                        <Link className="generic-green-box green-bttn" to="/projects">Projects</Link>
                    </div>
                </div>
            </Blocks>

            {
                user && projects.length > 0 && (
                <>
                    <div className="empty-space" />

                    <Blocks rowsConfig={["spruceplanks"]}>
                        <div className="home-cards">
                        {
                            projects.map((p, index)=> (
                                <PixelCard key={index} title={p.title} subtitle={p.description} img={p.image} techs={p.tags} ctaText="Open" ctaHref={p.link} fixedRows={16} ></PixelCard>
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