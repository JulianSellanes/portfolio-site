import "./Projects.css";
import { useNavigate } from "react-router-dom";
import { Blocks } from "../components/Blocks.jsx";
import { PixelCard } from "../components/PixelCard.jsx";
import { deleteProject } from "../utils/api.js";

export const Projects = ({user, projects = [], refreshProjects }) => {
    const navigate = useNavigate();

    const handleCreateProject = () => {
        navigate("/project-details/");
    }

    const handleUpdateProject = (id) => {
        navigate(`/project-details/${id}`);
    }

    const handleDeleteProject = async (id) => {
        const data = await deleteProject(id);
        if (data) if (refreshProjects) refreshProjects();
    }

    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="projects-content">
                    <h2 className="generic-title">Projects</h2>

                    {!user && (
                        <div className="generic-green-box contact-card-p">
                            <p className="generic-p">You need to login to see the projects</p>
                        </div>
                    )}

                    {user && user.role === "admin" && (
                        <button className="generic-green-box green-bttn" onClick={handleCreateProject}>Create Project</button>
                    )}

                    <div className="projects-cards">
                        {
                            projects.length > 0 ? (
                                projects.map((p, index) => (
                                    <PixelCard key={index} title={p.title} subtitle={p.description} img={p.image} techs={p.tags} ctaText="Open" ctaHref={p.link} fixedRows={16} user={user} handleUpdate={() => handleUpdateProject(p._id)} handleDelete={() => handleDeleteProject(p._id)}></PixelCard>
                                ))
                            ) : (
                                <div className="generic-green-box contact-card-p">
                                    <p className="generic-p">No projects found</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Blocks>

            <div className="empty-space" />
        </>
    );
}