import "./PixelCard.css";
import { Blocks } from "./Blocks.jsx";

export const PixelCard = ({ title, subtitle, img, techs = [], ctaText, ctaHref, fixedCols = 10, fixedRows = null }) => {
    const middleRows = { 
        type: "stone", 
        special: (i, cols) => (i === 0 || i === cols - 1 ? "obsidian" : null),
    }

    return (
        <Blocks rowsConfig={["obsidian", middleRows, "obsidian"]} repeatIndex={1} fixedCols={fixedCols} fixedRows={fixedRows}>
            <div className="card-content">
                {img && <img className="card-img" src={img} />}
                <h4 className="card-title">{title}</h4>
                {subtitle && <p className="card-subtitle">{subtitle}</p>}

                {techs.length > 0 && (
                    <div className="card-techs-group">
                        {
                            techs.map((t, index) => (
                                <div key={index} className="card-tech">{t}</div>
                            ))
                        }
                    </div>
                )}

                {ctaHref && (
                    <a className="green-bttn" href={ctaHref} target="_blank" rel="noreferrer">{ctaText || "View"}</a>
                )}
            </div>
        </Blocks>
    );
}