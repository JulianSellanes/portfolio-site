import "./PixelCard.css";
import { Blocks } from "./Blocks.jsx";

// Card with blocky borders
export const PixelCard = ({ title, subtitle, img, techs = [], ctaText, ctaHref, fixedCols = 10, fixedRows = null, user, handleUpdate, handleDelete }) => {
    // Define middle rows
    const middleRows = { 
        type: "stone", 
        special: (i, cols) => (i === 0 || i === cols - 1 ? "obsidian" : null),
    }

    return (
        <Blocks rowsConfig={["obsidian", middleRows, "obsidian"]} repeatIndex={1} fixedCols={fixedCols} fixedRows={fixedRows}>
            <div className="card-content">
                {img && <img className="card-img" src={img} />}
                <h4 className="card-title">{title}</h4>
                {subtitle && <p className="generic-p">{subtitle}</p>}

                {techs.length > 0 && (
                    <div className="card-techs-group">
                        {
                            techs.map((t, index) => (
                                <div key={index} className="generic-green-box card-tech">{t}</div>
                            ))
                        }
                    </div>
                )}

                {ctaHref && (
                    <a className="generic-green-box green-bttn" href={ctaHref} target="_blank" rel="noopener noreferrer">{ctaText || "View"}</a>
                )}

                {handleUpdate && handleDelete && user && user.role === "admin" && (
                    <div className="home-bttns-group">
                        <button className="generic-green-box green-bttn" onClick={handleUpdate}>Edit</button>
                        <button className="generic-green-box green-bttn" onClick={handleDelete}>Delete</button>
                    </div>
                )}
            </div>
        </Blocks>
    );
}