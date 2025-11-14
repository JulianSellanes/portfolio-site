import "./Services.css";
import { useNavigate } from "react-router-dom";
import { Blocks } from "../components/Blocks.jsx";
import { PixelCard } from "../components/PixelCard.jsx";
import { deleteService } from "../utils/api.js";

export const Services = ({user, services = [], refreshServices }) => {
    const navigate = useNavigate();

    const handleCreateService = () => {
        navigate("/service-details/");
    }

    const handleUpdateService = (id) => {
        navigate(`/service-details/${id}`);
    }

    const handleDeleteService = async (id) => {
        const data = await deleteService(id);
        if (data) if (refreshServices) refreshServices();
    }

    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="services-content">
                    <h2 className="generic-title">Services</h2>

                    {!user && (
                        <div className="generic-green-box contact-card-p">
                            <p className="generic-p">You need to login to see the services</p>
                        </div>
                    )}

                    {user && user.role === "admin" && (
                        <button className="generic-green-box green-bttn" onClick={handleCreateService}>Create Service</button>
                    )}

                    <div className="services-cards">
                        {
                            services.length > 0 ? (
                                services.map((s, index) => (
                                    <PixelCard key={index} title={s.title} img={s.img} techs={s.techs} user={user} handleUpdate={() => handleUpdateService(s._id)} handleDelete={() => handleDeleteService(s._id)}></PixelCard>
                                ))
                            ) : (
                                <div className="generic-green-box contact-card-p">
                                    <p className="generic-p">No services found</p>
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