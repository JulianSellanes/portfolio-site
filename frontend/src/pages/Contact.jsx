// import "./App.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
    const [form, setForm] = useState({ firstName:'', lastName:'', phone:'', email:'', message:'' });
    const navigate = useNavigate();

    function onChange(e){
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    function onSubmit(e){
        e.preventDefault();
        localStorage.setItem('lastContact', JSON.stringify({ ...form, ts: new Date().toISOString() }));
        navigate('/', { state: { toast: `I received your message, ${form.firstName}. I’ll reply soon!` } });
    }

    return (
        <section>
            <h1 className="h1">Contact Me</h1>

            <div className="card" style={{marginBottom:18}}>
                <strong>Info</strong>
                <div className="sub">Email: you@example.com · Location: Toronto, ON</div>
            </div>

            <form className="form" onSubmit={onSubmit}>
                <div style={{display:'grid', gap:12, gridTemplateColumns:'1fr 1fr'}}>
                    <input className="input" name="firstName" placeholder="First Name" value={form.firstName} onChange={onChange} required />
                    <input className="input" name="lastName" placeholder="Last Name" value={form.lastName} onChange={onChange} required />
                </div>

                <input className="input" name="phone" placeholder="Contact Number" value={form.phone} onChange={onChange} />
                <input className="input" name="email" type="email" placeholder="Email Address" value={form.email} onChange={onChange} required />
                <textarea className="textarea" name="message" placeholder="Message" value={form.message} onChange={onChange} required />
                <button className="btn" type="submit">Send</button>
            </form>
        </section>
    );
}