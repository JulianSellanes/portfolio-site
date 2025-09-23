// import "./App.css";
import { PixelCard } from '../components/PixelCard.jsx'

export const Projects = () => {
    const items = [
        { title:'Card Wars Platform', subtitle:'React + AWS (Cognito, Lambda, DynamoDB)', img:'/projects/proj1.jpg', link:'#' },
        { title:'Unity Bullet‑Hell', subtitle:'C# — URP bloom, dash, poison', img:'/projects/proj2.jpg', link:'#' },
        { title:'OntariGo', subtitle:'Maps + Events + AI itineraries', img:'/projects/proj3.jpg', link:'#' },
    ]

    return (
        <section>
            <h1 className="h1">Projects</h1>
            <div className="grid">
                {items.map((p,i)=> (
                    <PixelCard key={i} title={p.title} subtitle={p.subtitle} img={p.img} ctaText="Open" ctaHref={p.link}>
                    <p>Role: Full‑stack developer. Outcome: iterative releases and solid feedback.</p>
                    </PixelCard>
                ))}
            </div>
        </section>
    );
}