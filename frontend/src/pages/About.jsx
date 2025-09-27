import "./About.css";
import { Link, useLocation } from "react-router-dom";
import { Blocks } from "../components/Blocks.jsx";
import { PixelCard } from "../components/PixelCard.jsx";

export const About = () => {
    return (
        <>
            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="about-content">
                    <Blocks rowsConfig={["obsidian"]} fixedCols={9} fixedRows={11}>
                        <img className="about-img" src="/me.jpg" />
                    </Blocks>

                    <div className="about-group">
                        <h1 className="about-title">About Me</h1>
                        <p className="about-text">
                        Hi, my name is Julián Sellanes. I am a Unionville High School graduate, and I am currently in the Software Engineering program at Centennial College.
                        My hobbies are coding, drawing, and hit the gym.
                        </p>
                        <a className="green-bttn" href="/resume.pdf" download>Download Resume (PDF)</a>
                    </div>
                </div>
            </Blocks>
        </>
    );
}