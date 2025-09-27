import "./Home.css";
import { Link, useLocation } from "react-router-dom";
import { Blocks } from "../components/Blocks.jsx";
import { PixelCard } from "../components/PixelCard.jsx";

export const Home = () => {
    return (
        <>
            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="home-content">
                    <h1>Welcome to my Portfolio</h1>
                    <h3>Mission: My mission is to learn as much as I can about software engineering, work as hard as I can and save a lot, so that one day I can start my own company/entrepreneurship ⭐️</h3>
                    
                    <div className="home-bttns-group">
                        <Link className="green-bttn" to="/about">About Me</Link>
                        <Link className="green-bttn" to="/projects">Projects</Link>
                    </div>
                </div>
            </Blocks>

            <div className="empty-space" />

            <Blocks rowsConfig={["spruceplanks"]}>
                <div className="home-cards">
                    <PixelCard title="Title" subtitle="subtitle eefewfwef frewferfgerf refgerg egergerg gerre" img="/projects/proj1.jpg" techs={["React", "AWS", "Lambda", "DynamoDB", "DynamoDB", "DynamoDB", "DynamoDB", "DynamoDB"]} ctaText="Click" ctaHref="#" fixedRows={16}></PixelCard>
                    <PixelCard title="Title 2" subtitle="subtitle 2" img="/projects/proj1.jpg" ctaText="Click" ctaHref="#" fixedRows={16}></PixelCard>
                    <PixelCard title="Title 3" subtitle="subtitle 3" img="/projects/proj1.jpg" ctaText="Click" ctaHref="#" fixedRows={16}></PixelCard>
                </div>
            </Blocks>

            <div className="empty-space" />
        </>
    );
}