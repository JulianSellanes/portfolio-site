import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Blocks } from "../../components/Blocks.jsx";
import { getToken, getEducationById, createEducation, updateEducation } from "../../utils/api.js";

export const EducationDetails = ({ refreshEducation }) => {
    const [education, setEducation] = useState({ school: "", degree: "", years: "" });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchEducationById = async () => {
                const token = getToken();
                if (!token) {
                    navigate("/");
                    return;
                }

                const data = await getEducationById(id);
                if (data) {
                    setEducation({
                        school: data.school || "",
                        degree: data.degree || "",
                        years: data.years || ""
                    });
                } else {
                    navigate("/");
                }
            }

            fetchEducationById();
        }
    }, [id, navigate]);

    const onChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setEducation(prev => ({ ...prev, [name]: value }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const token = getToken();
        if (!token) return;

        const data = id ? await updateEducation(id, education) : await createEducation(education);

        if (data) {
            if (refreshEducation) refreshEducation();
            navigate("/education");
        } else {
            navigate("/");
        }
    }

    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="contact-content">
                    <h2 className="generic-title">{id ? "Update" : "Create"} Education</h2>

                    <form className="form" onSubmit={onSubmit}>
                        <input className="generic-green-box contact-input" name="school" type="text" placeholder="School" value={education.school} onChange={onChange} required />
                        <input className="generic-green-box contact-input" name="degree" type="text" placeholder="Degree" value={education.degree} onChange={onChange} required />
                        <input className="generic-green-box contact-input" name="years" type="text" placeholder="Years" value={education.years} onChange={onChange} required />
                        
                        <button className="generic-green-box green-bttn" type="submit">{id ? "Update" : "Create"} Education</button>
                    </form>
                </div>
            </Blocks>

            <div className="empty-space" />
        </>
    );
}

