import "./Education.css";
import { useEffect, useState } from "react";
import { calcCols, getOffsetForWidth, makeRow } from "../utils/rowMaker.jsx";
import { PixelCard } from "../components/PixelCard.jsx";

export const Education = () => {
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
        { school: 'Centennial College, Canada', degree: 'Software Systems Design (COMP 246 et al.)', years: '2024–2026' },
        { school: 'Self‑Directed', degree: 'AWS serverless architecture, React/Vite', years: 'Ongoing' },
    ];

    return (
         <div className="education">
            <div className="education-inner">
                <div className="block-panel" style={{ gridTemplateColumns: `repeat(${cols}, 32px)` }}>
                    {Array.from({ length: 9 }, (_, r) => (
                        <div key={`p2-${r}`} className="panel-row">
                        {planksRow}
                        </div>
                    ))}
                    <div className="education-content">
                        <h1>Education</h1>

                        <div className="timeline">
                            {items.map((e, index)=> (
                                <div key={index} className="timeline-item">
                                    <p className="timeline-date">{e.years}</p>
                                    <p>{e.school}</p>
                                    <p>{e.degree}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ height: "32px" }} />
            </div>
        </div>
    );

    return (
        <section>
            <h1 className="h1">Education</h1>
            <div className="timeline">
                {ed.map((e,i)=> (
                    <div key={i} className="item">
                        <div className="date">{e.years}</div>
                        <strong>{e.school}</strong>
                        <div>{e.degree}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}