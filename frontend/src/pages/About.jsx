import "./About.css";
import { Blocks } from "../components/Blocks.jsx";

export const About = () => {
    
    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="about-content">
                    <Blocks rowsConfig={["obsidian"]} fixedCols={9} fixedRows={11}>
                        <img className="about-img" src="/me.jpg" />
                    </Blocks>

                    <div className="about-group">
                        <h2 className="generic-title">About Me</h2>
                        <p className="about-text">
                        Hi, my name is Julián Sellanes. I am a Unionville High School graduate, and I am currently in the Software Engineering program at Centennial College.
                        My hobbies are coding, drawing, and hit the gym.
                        </p>
                        <a className="generic-green-box green-bttn" href="/resume.pdf" download>Download Resume (PDF)</a>
                    </div>
                </div>
            </Blocks>

            <div className="empty-space" />

            <Blocks rowsConfig={["brick"]}>
                <div className="about-lists">
                   <h2 className="generic-title">Skills</h2>

                    <ul className="generic-green-box about-list">
                        <li>Html + CSS</li>
                        <li>Javascript</li>
                        <li>React + Vite</li>
                        <li>Node + Express</li>
                        <li>Python</li>
                        <li>C#</li>
                        <li>Java</li>
                        <li>Agile Methodology</li>
                        <li><i>I don't like vibe coding.<br />I use AI as a tool to learn and fix bugs</i></li>
                    </ul>
                </div>
            </Blocks>

            <div className="empty-space" />
        </>
    );
}