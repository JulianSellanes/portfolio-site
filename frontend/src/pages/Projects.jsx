import "./Projects.css";
import { useEffect, useState } from "react";
import { calcCols, getOffsetForWidth, makeRow } from "../utils/rowMaker.jsx";
import { PixelCard } from "../components/PixelCard.jsx";

export const Projects = () => {
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

    const items = [
        { title: 'Card Wars Platform', subtitle: 'React + AWS (Cognito, Lambda, DynamoDB)', img: '/projects/proj1.jpg', techs: ["React", "React", "React", "React", "React", "React"], link: '#' },
        { title: 'Unity Bullet‑Hell', subtitle: 'C# — URP bloom, dash, poison', img: '/projects/proj2.jpg', techs: ["React", "React", "React", "React", "React", "React"], link: '#' },
        { title: 'OntariGo', subtitle: 'Maps + Events + AI itineraries', img: '/projects/proj3.jpg', techs: ["React", "React", "React", "React", "React", "React"], link: '#' },
    ];

    return (
        <div className="projects">
            <div className="projects-inner">
                <div className="block-panel" style={{ gridTemplateColumns: `repeat(${cols}, 32px)` }}>
                    {Array.from({ length: 35 }, (_, r) => (
                        <div key={`p2-${r}`} className="panel-row">
                        {planksRow}
                        </div>
                    ))}
                    <div className="projects-content">
                        <h1>Projects</h1>

                        <div className="projects-content-cards">
                            {items.map((p, index)=> (
                                <PixelCard key={index} title={p.title} subtitle={p.subtitle} img={p.img} techs={p.techs} ctaText="Open" ctaHref={p.link}></PixelCard>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ height: "32px" }} />
            </div>
        </div>
    );
}