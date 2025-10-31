import "./Projects.css";
import { Blocks } from "../components/Blocks.jsx";
import { PixelCard } from "../components/PixelCard.jsx";

export const Projects = ({ projects = [] }) => {

    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="projects-content">
                    <h2 className="generic-title">Projects</h2>

                    <div className="projects-cards">
                        {
                            projects.length > 0 && projects.map((p, index) => (
                                <PixelCard key={index} title={p.title} subtitle={p.subtitle} img={p.img} techs={p.techs} ctaText="Open" ctaHref={p.link} fixedRows={16}></PixelCard>
                            ))
                        }
                    </div>
                </div>
            </Blocks>

            <div className="empty-space" />
        </>
    );
}