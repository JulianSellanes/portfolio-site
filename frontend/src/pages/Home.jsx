import "./Home.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import { calcCols, getOffsetForWidth, makeRow } from "../utils/rowMaker.jsx";
import { PixelCard } from '../components/PixelCard.jsx'

export const Home = () => {
    const [cols, setCols] = useState(calcCols(getOffsetForWidth(window.innerWidth)));
    
    useEffect(() => {
        const onResize = () => setCols(calcCols(getOffsetForWidth(window.innerWidth)));
        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    }, []);

    const planksRow = makeRow(cols, "spruceplanks");


    // const location = useLocation();
    // const msg = location.state?.toast;

    // const last = JSON.parse(localStorage.getItem('lastContact') || 'null');

    return (
        <div className="home">
            <div className="home-inner">
                <div className="block-panel" style={{ gridTemplateColumns: `repeat(${cols}, 32px)` }}>
                    {Array.from({ length: 8 }, (_, r) => (
                        <div key={`p1-${r}`} className="panel-row">
                        {planksRow}
                        </div>
                    ))}
                    <div className="panel-content">
                        <h1>Welcome to my Portfolio</h1>
                        <h3>Mission: My mission is to learn as much as I can about software engineering, work as hard as I can and save a lot, so that one day I can start my own company/entrepreneurship ⭐️</h3>
                        
                        <div className="home-bttns-group">
                            <Link className="green-bttn" to="/about">About Me</Link>
                            <Link className="green-bttn" to="/projects">Projects</Link>
                        </div>
                    </div>
                </div>

                <div style={{ height: "32px" }} />

                <div className="block-panel" style={{ gridTemplateColumns: `repeat(${cols}, 32px)` }}>
                    {Array.from({ length: 15 }, (_, r) => (
                        <div key={`p2-${r}`} className="panel-row">
                        {planksRow}
                        </div>
                    ))}
                    <div className="panel-content cards-panel">
                        <PixelCard title="Serverless Crafting" subtitle="AWS Cognito, Lambda, DynamoDB" img="/projects/proj1.jpg" ctaText="Case Study" ctaHref="#"></PixelCard>
                        <PixelCard title="Serverless Crafting" subtitle="AWS Cognito, Lambda, DynamoDB" img="/projects/proj1.jpg" ctaText="Case Study" ctaHref="#"></PixelCard>
                        <PixelCard title="Serverless Crafting" subtitle="AWS Cognito, Lambda, DynamoDB" img="/projects/proj1.jpg" ctaText="Case Study" ctaHref="#"></PixelCard>
                    </div>
                </div>

                <div style={{ height: "32px" }} />
            </div>
        </div>
    );

    return (
        <div className="home">
            <div className="home-inner">
                <div className="home-grid" style={{ gridTemplateColumns: `repeat(${cols}, 32px)` }}>
                    {planksRow}
                    {planksRow}
                    {planksRow}
                    {planksRow}
                    {planksRow}
                    {planksRow}
                    {planksRow}
                    {planksRow}
                    {planksRow}
                </div>

                <div className="home-content">
                    <div className="home-block">
                        <h1>Welcome to my Portfolio</h1>
                        <h3>Mission: My mission is to learn as much as I can about software engineering, work as hard as I can and save a lot, so that one day I can start my own company/entrepreneurship ⭐️</h3>
                        
                        <div className="home-bttns-group">
                            <Link className="green-bttn" to="/about">About Me</Link>
                            <Link className="green-bttn" to="/projects">Projects</Link>
                        </div>
                    </div>

                    <div className="home-grid">
                        <PixelCard title="Serverless Crafting" subtitle="AWS Cognito, Lambda, DynamoDB" img="/projects/proj1.jpg" ctaText="Case Study" ctaHref="#">
                            <p>Authentication, rooms, websockets, and more.</p>
                        </PixelCard>
                        <PixelCard title="Serverless Crafting" subtitle="AWS Cognito, Lambda, DynamoDB" img="/projects/proj1.jpg" ctaText="Case Study" ctaHref="#">
                            <p>Authentication, rooms, websockets, and more.</p>
                        </PixelCard>
                        <PixelCard title="Serverless Crafting" subtitle="AWS Cognito, Lambda, DynamoDB" img="/projects/proj1.jpg" ctaText="Case Study" ctaHref="#">
                            <p>Authentication, rooms, websockets, and more.</p>
                        </PixelCard>
                    </div>
                </div>
            </div>
        </div>
    );
}