// import "./App.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import { PixelCard } from '../components/PixelCard.jsx'

export const Home = () => {
    const location = useLocation();
    const msg = location.state?.toast;

    const last = JSON.parse(localStorage.getItem('lastContact') || 'null');

    return (
        <div>
            <h1 className="h1">Welcome to my world 🧱</h1>
            <p className="sub">I build web apps, serverless backends, and playful interactive experiences. <br/>
            Mission: <em>ship clean code, fast iterations, and meaningful products.</em>
            </p>

            <p style={{margin:'18px 0'}}>
                <Link className="btn" to="/about">About Me</Link>
                <span style={{display:'inline-block', width:12}} />
                <Link className="btn" to="/projects">See Projects</Link>
            </p>

            <div className="grid" style={{marginTop:24}}>
                <PixelCard title="Serverless Crafting" subtitle="AWS Cognito, Lambda, DynamoDB" img="/projects/proj1.jpg" ctaText="Case Study" ctaHref="#">
                    <p>Authentication, rooms, websockets, and more.</p>
                </PixelCard>
                <PixelCard title="Unity Bullet‑Hell" subtitle="URP bloom, dash, poison" img="/projects/proj2.jpg" ctaText="Gameplay" ctaHref="#">
                    <p>Fast triangle player and crunchy VFX.</p>
                </PixelCard>
                <PixelCard title="OntariGo" subtitle="Smart Travel Companion" img="/projects/proj3.jpg" ctaText="Demo" ctaHref="#">
                    <p>Maps, events, and AI itineraries across Ontario.</p>
                </PixelCard>
            </div>

            {last && (
                <div className="card" style={{marginTop:24}}>
                    <strong>Last message received:</strong>
                    <pre style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(last, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}