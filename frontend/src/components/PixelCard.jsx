import "./PixelCard.css";
import { useEffect, useState } from "react";
import { calcCols, makeRow } from "../utils/rowMaker.jsx";

export const PixelCard = ({ title, subtitle, img, children, ctaText, ctaHref }) => {

    const [cols, setCols] = useState(10);
    const [rows, setRows] = useState(12);

    const topRow = makeRow(cols, "obsidian");
    const bottomRow = makeRow(cols, "obsidian");
    // const middleRow = makeRow(cols, "cobblestone", {
    //     special: (i, cols) => (i === 0 || i === cols - 1 ? "obsidian" : null),
    // });

    // const middleRow = Array.from({ length: rows - 2 }, (_, r) => (
    //     <div key={`row-${r}`} className="card-row" style={{ gridTemplateColumns: `repeat(${cols}, 32px)` }}>
    //         <div className="block obsidian" />
    //             {makeRow(cols - 2, fill)}
    //         <div className="block obsidian" />
    //     </div>
    // ));

    return (
        <div className="pixel-card">
            <div className="card-grid" style={{ gridTemplateColumns: `repeat(${cols}, 32px)` }}>
                {topRow}
                {
                    Array.from({ length: rows - 2 }, (_, r) => (
                        <div key={`row-${r}`} className="card-row">
                            {makeRow(cols, "cobblestone", {
                                special: (i, cols) => (i === 0 || i === cols - 1 ? "obsidian" : null),
                            })}
                        </div>
                    ))
                }
                {bottomRow}
            </div>

            <div className="card-content">
                {img && <img src={img} />}
                <h4>{title}</h4>
                {subtitle && <p>{subtitle}</p>}
                {children}
            </div>
        </div>

        // <div className="pixel-card">
        //     {img && <img src={img} />}

        //     <h3>{title}</h3>

        //     {subtitle && <p className="subtitle">{subtitle}</p>}

        //     {children}

        //     {ctaHref && (
        //         <a className="green-bttn" href={ctaHref} target="_blank" rel="noreferrer">{ctaText || "View"}</a>
        //     )}
        // </div>
    )
}