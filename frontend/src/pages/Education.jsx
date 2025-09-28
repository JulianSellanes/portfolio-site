import "./Education.css";
import { Blocks } from "../components/Blocks.jsx";

export const Education = ({ education = [] }) => {
    
    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="education-content">
                    <h2 className="generic-title">Education</h2>

                    <div className="timeline">
                        {
                            education.length > 0 && education.map((e, index)=> (
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