import "./Services.css";
import { Blocks } from "../components/Blocks.jsx";
import { PixelCard } from "../components/PixelCard.jsx";

export const Services = ({ services = [] }) => {
    
    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="services-content">
                    <h2 className="generic-title">Services</h2>

                    <div className="services-cards">
                        {
                            services.length > 0 && services.map((s, index)=> (
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