import "./Home.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { calcCols, getOffsetForWidth, getRowsForWidth, makeRow } from "../utils/rowMaker.jsx";
import { PixelCard } from "../components/PixelCard.jsx";

export const Home = () => {
    const [cols, setCols] = useState(calcCols(getOffsetForWidth(window.innerWidth)));
    const [rows, setRows] = useState(getRowsForWidth(window.innerWidth));

    useEffect(() => {
        const update = () => {
            setCols(calcCols(getOffsetForWidth(window.innerWidth)));
            setRows(getRowsForWidth(window.innerWidth));
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const planksRow = makeRow(cols, "spruceplanks");

    return (
        <div className="home">
            <div className="home-inner">
                <div className="block-panel" style={{ gridTemplateColumns: `repeat(${cols}, 32px)` }}>
                    {Array.from({ length: 8 }, (_, r) => (
                        <div key={`p1-${r}`} className="panel-row">
                        {planksRow}
                        </div>
                    ))}
                    <div className="home-content">
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
                    {Array.from({ length: rows }, (_, r) => (
                        <div key={`p2-${r}`} className="panel-row">
                        {planksRow}
                        </div>
                    ))}
                    <div className="home-content-cards">
                        <PixelCard title="Title" subtitle="subtitle" img="/projects/proj1.jpg" techs={["React", "AWS", "Lambda", "DynamoDB", "DynamoDB", "DynamoDB", "DynamoDB", "DynamoDB"]} ctaText="Click" ctaHref="#"></PixelCard>
                        <PixelCard title="Title 2" subtitle="subtitle 2" img="/projects/proj1.jpg" ctaText="Click" ctaHref="#"></PixelCard>
                        <PixelCard title="Title 3" subtitle="subtitle 3" img="/projects/proj1.jpg" ctaText="Click" ctaHref="#"></PixelCard>
                    </div>
                </div>

                <div style={{ height: "32px" }} />
            </div>
        </div>
    );
}