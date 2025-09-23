// import "./App.css";
import { PixelCard } from '../components/PixelCard.jsx'

export const Services = () => {
    const svc = [
        { title:'Web Development', subtitle:'React, Vite, Tailwind‑free CSS', img:'/projects/proj1.jpg' },
        { title:'Serverless Backends', subtitle:'API Gateway + Lambda + DynamoDB', img:'/projects/proj2.jpg' },
        { title:'Game‑like UX', subtitle:'Canvas effects, pixel polish', img:'/projects/proj3.jpg' },
    ]
    return (
        <section>
            <h1 className="h1">Services</h1>
            <div className="grid">
                {svc.map((s,i)=> (
                    <PixelCard key={i} title={s.title} subtitle={s.subtitle} img={s.img} />
                ))}
            </div>
        </section>
    );
}