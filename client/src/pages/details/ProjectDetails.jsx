import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Blocks } from "../../components/Blocks.jsx";
import { getToken, getProjectById, createProject, updateProject } from "../../utils/api.js";

export const ProjectDetails = ({ refreshProjects }) => {
    const [project, setProject] = useState({ title: "", description: "", image: "", tags: [], link: "" });
    const [tagsInput, setTagsInput] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchProjectById = async () => {
                const token = getToken();
                if (!token) {
                    navigate("/");
                    return;
                }

                const data = await getProjectById(id);
                if (data) {
                    setProject({
                        title: data.title || "",
                        description: data.description || "",
                        image: data.image || "",
                        tags: data.tags || [],
                        link: data.link || ""
                    });

                    setTagsInput(Array.isArray(data.tags) ? data.tags.join(", ") : "");
                } else {
                    navigate("/");
                }
            }

            fetchProjectById();
        }
    }, [id, navigate]);

    const onChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        
        if (name === "tags") {
            setTagsInput(value);
        } else {
            setProject(prev => ({ ...prev, [name]: value }));
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const token = getToken();
        if (!token) return;

        const tagsArray = tagsInput
            .split(",")
            .map(tag => tag.trim())
            .filter(tag => tag.length > 0);

        const projectData = {
            ...project,
            tags: tagsArray
        };

        const data = id ? await updateProject(id, projectData) : await createProject(projectData);

        if (data) {
            if (refreshProjects) refreshProjects();
            navigate("/projects");
        } else {
            navigate("/");
        }
    }

    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="contact-content">
                    <h2 className="generic-title">{id ? "Update" : "Create"} Project</h2>

                    <form className="form" onSubmit={onSubmit}>
                        <input className="generic-green-box contact-input" name="title" type="text" placeholder="Title" value={project.title} onChange={onChange} required />
                        <input className="generic-green-box contact-input" name="description" type="text" placeholder="Description" value={project.description} onChange={onChange} required />
                        <input className="generic-green-box contact-input" name="image" type="text" placeholder="Image url" value={project.image} onChange={onChange} required />
                        <input className="generic-green-box contact-input" name="tags" type="text" placeholder="Tags (comma-separated)" value={tagsInput} onChange={onChange} required />
                        <input className="generic-green-box contact-input" name="link" type="text" placeholder="Link" value={project.link} onChange={onChange} required />
                        
                        <button className="generic-green-box green-bttn" type="submit">{id ? "Update" : "Create"} Project</button>
                    </form>
                </div>
            </Blocks>

            <div className="empty-space" />
        </>
    );
}