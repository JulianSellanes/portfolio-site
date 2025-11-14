import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Blocks } from "../../components/Blocks.jsx";

export const Register = ({ setUser }) => {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            })

            if(!response.ok) throw new Error("Failed to register");

            const data = await response.json();
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.user.username);
            localStorage.setItem("role", data.user.role || "user");
            
            if (setUser) setUser({ username: data.user.username, role: data.user.role || "user" });
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="contact-content">
                    <h2 className="generic-title">Register</h2>

                    {error && (
                        <div className="generic-green-box contact-card-p">
                            <p className="generic-p">{error}</p>
                        </div>
                    )}

                    <form className="form" onSubmit={onSubmit}>
                        <input className="generic-green-box contact-input" name="username" type="text" placeholder="Username" value={form.username} onChange={onChange} required />
                        <input className="generic-green-box contact-input" name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
                        <input className="generic-green-box contact-input" name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} required />
                        
                        <button className="generic-green-box green-bttn" type="submit">Register</button>
                    </form>
                </div>
            </Blocks>

            <div className="empty-space" />
        </>
    );
}