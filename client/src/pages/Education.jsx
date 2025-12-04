import "./Education.css";
import { useNavigate } from "react-router-dom";
import { Blocks } from "../components/Blocks.jsx";
import { deleteEducation } from "../utils/api.js";

export const Education = ({user, education = [], refreshEducation }) => {
    const navigate = useNavigate();

    const handleCreateEducation = () => {
        navigate("/education-details/");
    }

    const handleUpdateEducation = (id) => {
        navigate(`/education-details/${id}`);
    }

    const handleDeleteEducation = async (id) => {
        const data = await deleteEducation(id);
        if (data) if (refreshEducation) refreshEducation();
    }

    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="education-content">
                    <h2 className="generic-title">Education</h2>

                    {/* {!user && (
                        <div className="generic-green-box contact-card-p">
                            <p className="generic-p">You need to login to see the education</p>
                        </div>
                    )} */}

                    {user && user.role === "admin" && (
                        <button className="generic-green-box green-bttn" onClick={handleCreateEducation}>Create Education</button>
                    )}

                    {education.length > 0 ? (
                        <div className="timeline">
                            {education.map((e, index) => (
                                <div key={index} className="timeline-item">
                                    <p className="timeline-date">{e.years}</p>
                                    <p>{e.school}</p>
                                    <p>{e.degree}</p>
                                    {user && user.role === "admin" && (
                                        <div className="home-bttns-group">
                                            <button className="generic-green-box green-bttn" onClick={() => handleUpdateEducation(e._id)}>Update</button>
                                            <button className="generic-green-box green-bttn" onClick={() => handleDeleteEducation(e._id)}>Delete</button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="generic-green-box contact-card-p">
                            <p className="generic-p">No education found</p>
                        </div>
                    )}
                </div>
            </Blocks>

            <div className="empty-space" />
        </>
    );
}