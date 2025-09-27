import "./Blocks.css";
import { useEffect, useRef, useState } from "react";
import { calcCols } from "../utils/getNeededCols.js";
import { makeRow } from "../utils/rowsMaker.jsx";
import { useNeededRows } from "../utils/useNeededRows.js";

const BLOCK = 32;

export const Blocks = ({ rowsConfig = [], repeatIndex = null, fixedCols = null, fixedRows = null, children }) => {
    const [autoCols, setAutoCols] = useState(calcCols(window.innerWidth));
    const contentRef = useRef(null);

    useEffect(() => {
        if (fixedCols != null) return;

        const update = () => {
            setAutoCols(calcCols(window.innerWidth));
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [fixedCols]);

    const cols = fixedCols ?? autoCols;
    const autoRows = useNeededRows(contentRef, { block: BLOCK, min: rowsConfig.length || 1 });
    const neededRows = fixedRows ?? autoRows;
    const rIndex = repeatIndex ?? 0;
    const normalizedRows = rowsConfig.map((row) => {
        if (typeof row === "string") {
            // Simple string → normal row
            return (cols) => makeRow(cols, row);
        } else if (typeof row === "function") {
            // Already a function → just use it
            return row;
        } else if (typeof row === "object" && row.type) {
            // Object with type + special
            return (cols) => makeRow(cols, row.type, row);
        } else {
            console.warn(`Invalid row config: ${row}`);
            return () => null;
        }
    });
    
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