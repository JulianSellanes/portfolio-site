import "./Projects.css";
import { Blocks } from "../components/Blocks.jsx";
import { PixelCard } from "../components/PixelCard.jsx";

export const Projects = () => {
    const projects = [
        { title: 'Card Wars Platform', subtitle: 'React + AWS (Cognito, Lambda, DynamoDB fewfew ewfwe ewf wef ew wef wfe wef ew  ewf fewfwefe fewwe fewfewf wefwe fweef w fwef )', img: '/projects/proj1.jpg', techs: ["React", "React", "React", "React", "React", "React"], link: '#' },
        { title: 'Unity Bullet‑Hell', subtitle: 'C# — URP bloom, dash, poison', img: '/projects/proj2.jpg', techs: ["React", "React", "React", "React", "React", "React"], link: '#' },
        { title: 'OntariGo', subtitle: 'Maps + Events + AI itineraries', img: '/projects/proj3.jpg', techs: ["React", "React", "React", "React", "React", "React"], link: '#' },
    ];

    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="projects-content">
                    <h1>Projects</h1>

                    <div className="projects-cards">
                        {
                            projects.map((p, index)=> (
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