import "./Education.css";
import { Blocks } from "../components/Blocks.jsx";
import { PixelCard } from "../components/PixelCard.jsx";

export const Education = () => {
    const education = [
        { school: 'Centennial College, Canada', degree: 'Software Systems Design (COMP 246 et al.)', years: '2024–2026' },
        { school: 'Self‑Directed', degree: 'AWS serverless architecture, React/Vite', years: 'Ongoing' },
    ];

    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="education-content">
                    <h1>Education</h1>

                    <div className="timeline">
                        {
                            education.map((e, index)=> (
                                <div key={index} className="timeline-item">
                                    <p className="timeline-date">{e.years}</p>
                                    <p>{e.school}</p>
                                    <p>{e.degree}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Blocks>

            <div className="empty-space" />
        </>
    );
}