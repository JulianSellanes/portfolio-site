import "./Services.css";
import { Blocks } from "../components/Blocks.jsx";
import { PixelCard } from "../components/PixelCard.jsx";

export const Services = () => {
    const services = [
        { title: 'Web Development', subtitle: 'React, Vite, Tailwind‑free CSS', img: '/projects/proj1.jpg', techs: ["React", "React", "React", "React", "React", "React"] },
        { title: 'Backend Development', subtitle: 'API Gateway + Lambda + DynamoDB', img: '/projects/proj2.jpg', techs: ["React", "React", "React", "React", "React", "React"] },
        { title: 'Game Development', subtitle: 'Canvas effects, pixel polish', img: '/projects/proj3.jpg', techs: ["React", "React", "React", "React", "React", "React"] },
    ];

    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="services-content">
                    <h1>Services</h1>

                    <div className="services-cards">
                        {
                            services.map((s, index)=> (
                                <PixelCard key={index} title={s.title} img={s.img} techs={s.techs}></PixelCard>
                            ))
                        }
                    </div>
                </div>
            </Blocks>

            <div className="empty-space" />
        </>
    );
}