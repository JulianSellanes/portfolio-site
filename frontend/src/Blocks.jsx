import "./Blocks.css";
import { useEffect, useRef, useState } from "react";
import { calcCols, getOffsetForWidth, makeRow } from "./utils/rowMaker.jsx";
import { useAutoRows } from "./utils/useAutoRows.js";

const BLOCK = 32;

export const Blocks = ({ rowsConfig = [], repeatIndex = null, children }) => {
    const [cols, setCols] = useState(calcCols(getOffsetForWidth(window.innerWidth)));
    const contentRef = useRef(null);

    useEffect(() => {
        const update = () => {
            setCols(calcCols(getOffsetForWidth(window.innerWidth)));
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const neededRows = useAutoRows(contentRef, { block: 32, min: rowsConfig.length || 1 });
    const rIndex = repeatIndex ?? 0;
    const normalizedRows = rowsConfig.map((row) =>
        typeof row === "string" ? (cols) => makeRow(cols, row) : row
    );
    
    let topRows = normalizedRows.slice(0, rIndex);     // rows before repeat
    const repeatRow = normalizedRows[rIndex];          // row to repeat
    let bottomRows = normalizedRows.slice(rIndex + 1); // rows after repeat

    const fixedCount = topRows.length + 1 + bottomRows.length; // top + repeat + bottom
    const extra = Math.max(0, neededRows - fixedCount);

    return (
        <div className="blocks">
            <div className="blocks-panel" style={{ gridTemplateColumns: `repeat(${cols}, ${BLOCK}px)`, gridTemplateRows: `repeat(${neededRows}, ${BLOCK}px)`, }}>
                {
                    topRows.map((rowFn, index) => (
                        <div key={`top-${index}`} className="blocks-row">
                            {rowFn(cols)}
                        </div>
                    ))
                }
                {
                    Array.from({ length: extra }, (_, index) => (
                        <div key={`filler-${index}`} className="blocks-row">
                            {repeatRow(cols)}
                        </div>
                    ))
                }
                {
                    repeatRow && (
                        <div key="repeat-base" className="blocks-row">
                            {repeatRow(cols)}
                        </div>
                    )
                }
                {
                    bottomRows.map((rowFn, index) => (
                        <div key={`bottom-${index}`} className="blocks-row">
                            {rowFn(cols)}
                        </div>
                    ))
                }

                <div className="blocks-content" ref={contentRef}>
                    {children}
                </div>
            </div>
        </div>
    );
}