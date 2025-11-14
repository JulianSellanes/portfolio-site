import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Blocks } from "../../components/Blocks.jsx";
import { getToken, getServiceById, createService, updateService } from "../../utils/api.js";

export const ServiceDetails = ({ refreshServices }) => {
    const [service, setService] = useState({ title: "", img: "", techs: [] });
    const [techsInput, setTechsInput] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchServiceById = async () => {
                const token = getToken();
                if (!token) {
                    navigate("/");
                    return;
                }

                const data = await getServiceById(id);
                if (data) {
                    setService({
                        title: data.title || "",
                        img: data.img || "",
                        techs: data.techs || []
                    });

                    setTechsInput(Array.isArray(data.techs) ? data.techs.join(", ") : "");
                } else {
                    navigate("/");
                }
            }

            fetchServiceById();
        }
    }, [id, navigate]);

    const onChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        
        if (name === "techs") {
            setTechsInput(value);
        } else {
            setService(prev => ({ ...prev, [name]: value }));
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const token = getToken();
        if (!token) return;

        const techsArray = techsInput
            .split(",")
            .map(tech => tech.trim())
            .filter(tech => tech.length > 0);

        const serviceData = {
            ...service,
            techs: techsArray
        };

        const data = id ? await updateService(id, serviceData) : await createService(serviceData);

        if (data) {
            if (refreshServices) refreshServices();
            navigate("/services");
        } else {
            navigate("/");
        }
    }

    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="contact-content">
                    <h2 className="generic-title">{id ? "Update" : "Create"} Service</h2>

                    <form className="form" onSubmit={onSubmit}>
                        <input className="generic-green-box contact-input" name="title" type="text" placeholder="Title" value={service.title} onChange={onChange} required />
                        <input className="generic-green-box contact-input" name="img" type="text" placeholder="Image url" value={service.img} onChange={onChange} required />
                        <input className="generic-green-box contact-input" name="techs" type="text" placeholder="Techs (comma-separated)" value={techsInput} onChange={onChange} required />
                        
                        <button className="generic-green-box green-bttn" type="submit">{id ? "Update" : "Create"} Service</button>
                    </form>
                </div>
            </Blocks>

            <div className="empty-space" />
        </>
    );
}

