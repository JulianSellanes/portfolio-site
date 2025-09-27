import "./About.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { calcCols, getOffsetForWidth, makeRow } from "../utils/rowMaker.jsx";
import { PixelCard } from "../components/PixelCard.jsx";

export const About = () => {
    const [cols, setCols] = useState(calcCols(getOffsetForWidth(window.innerWidth)));

    useEffect(() => {
        const update = () => {
            setCols(calcCols(getOffsetForWidth(window.innerWidth)));
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const planksRow = makeRow(cols, "spruceplanks");

    return (
        <div className="about">
            <div className="about-inner">
                <div className="block-panel" style={{ gridTemplateColumns: `repeat(${cols}, 32px)` }}>
                    {Array.from({ length: 8 }, (_, r) => (
                        <div key={`p1-${r}`} className="panel-row">
                        {planksRow}
                        </div>
                    ))}
                    <div className="about-content">
                        <img className="about-img" src="/me.jpg" />

                        <div className="about-group">
                            <h1 className="about-title">About Me</h1>
                            <p className="about-text">
                            Hi, my name is Julián Sellanes. I am a Unionville High School graduate, and I am currently in the Software Engineering program at Centennial College.
                            My hobbies are coding, drawing, and hit the gym.
                            </p>
                            <a className="green-bttn" href="/resume.pdf" download>Download Resume (PDF)</a>
                        </div>
                    </div>
                </div>

                <div style={{ height: "32px" }} />

                <div className="block-panel" style={{ gridTemplateColumns: `repeat(${cols}, 32px)` }}>
                    {Array.from({ length: 8 }, (_, r) => (
                        <div key={`p2-${r}`} className="panel-row">
                        {planksRow}
                        </div>
                    ))}
                    <div className="about-content-cards">

                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section>
            <h1 className="h1">About Me</h1>
            <div className="grid" style={{alignItems:'start'}}>\

                <div className="card">
                    <h3>Tech Stack</h3>
                    <ul>
                        <li>React + Vite (SWC)</li>
                        <li>Node/Express, AWS Lambda/DynamoDB</li>
                        <li>Unity (2D), WebSockets</li>
                    </ul>

                    <h3>Highlights</h3>
                    <ul>
                        <li>Serverless card‑game backend with rooms and bets</li>
                        <li>Travel planner integrating maps and events APIs</li>
                        <li>UI polish with pixel/voxel aesthetics</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}