import "./Footer.css";
import { Blocks } from "./Blocks.jsx";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Blocks rowsConfig={["stone", "bedrock"]} repeatIndex={0}>
            <div className="footer-content">
                <i>© {year} Julián Sellanes</i>
            </div>
        </Blocks>
    );
}