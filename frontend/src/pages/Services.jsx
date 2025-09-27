import "./Services.css";
import { useEffect, useState } from "react";
import { calcCols, getOffsetForWidth, makeRow } from "../utils/rowMaker.jsx";
import { PixelCard } from "../components/PixelCard.jsx";

export const Services = () => {
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
        { title: 'Web Development', subtitle: 'React, Vite, Tailwind‑free CSS', img: '/projects/proj1.jpg', techs: ["React", "React", "React", "React", "React", "React"] },
        { title: 'Backend Development', subtitle: 'API Gateway + Lambda + DynamoDB', img: '/projects/proj2.jpg', techs: ["React", "React", "React", "React", "React", "React"] },
        { title: 'Game Development', subtitle: 'Canvas effects, pixel polish', img: '/projects/proj3.jpg', techs: ["React", "React", "React", "React", "React", "React"] },
    ];

    return (
        <div className="services">
            <div className="services-inner">
                <div className="block-panel" style={{ gridTemplateColumns: `repeat(${cols}, 32px)` }}>
                    {Array.from({ length: 33 }, (_, r) => (
                        <div key={`p2-${r}`} className="panel-row">
                        {planksRow}
                        </div>
                    ))}
                    <div className="services-content">
                        <h1>Services</h1>

                        <div className="services-content-cards">
                            {items.map((s, index)=> (
                                <PixelCard key={index} title={s.title} img={s.img} techs={s.techs}></PixelCard>
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
            <h1 className="h1">Services</h1>
            <div className="grid">
                {items.map((s,i)=> (
                    <PixelCard key={i} title={s.title} subtitle={s.subtitle} img={s.img} />
                ))}
            </div>
        </section>
    );
}