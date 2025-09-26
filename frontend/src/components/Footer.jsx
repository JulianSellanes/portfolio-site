import "./Footer.css";
import { useEffect, useState } from "react";
import { calcCols, getOffsetForWidth, makeRow } from "../utils/rowMaker.jsx";

export const Footer = () => {
    const [cols, setCols] = useState(calcCols(getOffsetForWidth(window.innerWidth)));
    
    useEffect(() => {
        const onResize = () => setCols(calcCols(getOffsetForWidth(window.innerWidth)));
        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    }, []);

    const stoneRow = makeRow(cols, "stone");
    const bedrockRow = makeRow(cols, "bedrock");

    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer-inner">
                <div className="footer-grid" style={{ gridTemplateColumns: `repeat(${cols}, 32px)` }}>
                    {stoneRow}
                    {stoneRow}
                    {stoneRow}
                    {bedrockRow}
                </div>

                <div className="footer-content">
                    <div className="footer-text">© {year} Julian Sellanes</div>
                </div>
            </div>
        </div>
    );
}