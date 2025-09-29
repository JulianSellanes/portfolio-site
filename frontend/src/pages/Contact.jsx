import "./Contact.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Blocks } from "../components/Blocks.jsx";

export const Contact = () => {
    const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "" });
    const navigate = useNavigate();

    function onChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function onSubmit(e) {
        e.preventDefault();
        localStorage.setItem("lastContact", JSON.stringify({ ...form, ts: new Date().toISOString() }));
        navigate("/", { state: { toast: `I received your message, ${form.firstName}. I’ll reply soon!` } });
    }

    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="contact-content">
                    <h2 className="generic-title">Contact Me</h2>

                    <div className="generic-green-box contact-card-p">
                        <p className="generic-p">Email: julian.sellanes@gmail.com</p>
                        <p className="generic-p">Location: Markham, ON</p>
                    </div>

                    <div className="generic-green-box contact-card-social">
                        <a className="generic-green-box green-bttn social-bttn" href="https://github.com/JulianSellanes/" target="_blank" rel="noopener noreferrer"><span className="fa-brands fa-github"></span></a>
                        <a className="generic-green-box green-bttn social-bttn" href="https://www.linkedin.com/in/juliansellanes/" target="_blank" rel="noopener noreferrer"><span className="fa-brands fa-linkedin"></span></a>
                        <a className="generic-green-box green-bttn social-bttn" href="https://www.youtube.com/@NoaDev" target="_blank" rel="noopener noreferrer"><span className="fa-brands fa-youtube"></span></a>
                    </div>

                    <form className="form" onSubmit={onSubmit}>
                        <div className="name-group">
                            <input className="generic-green-box contact-input" name="firstName" placeholder="First Name" value={form.firstName} onChange={onChange} required />
                            <input className="generic-green-box contact-input" name="lastName" placeholder="Last Name" value={form.lastName} onChange={onChange} required />
                        </div>

                        <input className="generic-green-box contact-input" name="phone" placeholder="Contact Number" value={form.phone} onChange={onChange} />
                        <input className="generic-green-box contact-input" name="email" type="email" placeholder="Email Address" value={form.email} onChange={onChange} required />
                        <textarea className="generic-green-box contact-textarea" name="message" placeholder="Message" value={form.message} onChange={onChange} required />

                        <button className="generic-green-box green-bttn" type="submit">Send</button>
                    </form>
                </div>
            </Blocks>

            <div className="empty-space" />
        </>
    );
}