import "./Blocks.css";
import { useEffect, useRef, useState } from "react";
import { calcCols } from "../utils/getNeededCols.js";
import { makeRow } from "../utils/rowsMaker.jsx";
import { useNeededRows } from "../utils/useNeededRows.js";

const BLOCK = 32; // Size of each block

// Generic block grid container. It can auto-adjust columns/rows or be locked to fixed sizes
export const Blocks = ({ rowsConfig = [], repeatIndex = null, fixedCols = null, fixedRows = null, children }) => {
    const [autoCols, setAutoCols] = useState(calcCols(window.innerWidth)); // Auto-calculated columns based on screen width (unless fixedCols is provided)
    const contentRef = useRef(null); // Ref to the overlay content, used by useNeededRows to measure height

    // Recalculate autoCols whenever the window resizes
    useEffect(() => {
        if (fixedCols != null) return;

        const update = () => {
            setAutoCols(calcCols(window.innerWidth));
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [fixedCols]);

    const cols = fixedCols ?? autoCols; // Final number of columns

    // Auto-calculate rows needed based on content height (unless fixedRows is provided)
    const autoRows = useNeededRows(contentRef, { block: BLOCK, min: rowsConfig.length || 1 });
    const neededRows = fixedRows ?? autoRows;

    const rIndex = repeatIndex ?? 0; // Index of row that repeats

    // Normalize rowsConfig into functions that generate block rows
    const normalizedRows = rowsConfig.map((row) => {
        if (typeof row === "string") {
            // Simple string -> normal row
            return (cols) => makeRow(cols, row);
        } else if (typeof row === "function") {
            // Already a function -> just use it
            return row;
        } else if (typeof row === "object" && row.type) {
            // Object with type + special
            return (cols) => makeRow(cols, row.type, row);
        } else {
            console.warn(`Invalid row config: ${row}`);
            return () => null;
        }
    });
    
    let topRows = normalizedRows.slice(0, rIndex);     // Rows before repeat
    const repeatRow = normalizedRows[rIndex];          // Row to repeat
    let bottomRows = normalizedRows.slice(rIndex + 1); // Rows after repeat

    const fixedCount = topRows.length + 1 + bottomRows.length; // Total fixed rows
    const extra = Math.max(0, neededRows - fixedCount);        // Extra filler rows

    return (
        <div className="blocks">
            <div className="blocks-panel" style={{ gridTemplateColumns: `repeat(${cols}, ${BLOCK}px)`, gridTemplateRows: `repeat(${neededRows}, ${BLOCK}px)`, }}>
                
                {
                    /* Top section rows */
                    topRows.map((rowFn, index) => (
                        <div key={`top-${index}`} className="blocks-row">
                            {rowFn(cols)}
                        </div>
                    ))
                }
                {
                    /* Filler rows (repeat pattern) */
                    Array.from({ length: extra }, (_, index) => (
                        <div key={`filler-${index}`} className="blocks-row">
                            {repeatRow(cols)}
                        </div>
                    ))
                }
                {
                    /* Base repeat row */
                    repeatRow && (
                        <div key="repeat-base" className="blocks-row">
                            {repeatRow(cols)}
                        </div>
                    )
                }
                {
                    /* Bottom section rows */
                    bottomRows.map((rowFn, index) => (
                        <div key={`bottom-${index}`} className="blocks-row">
                            {rowFn(cols)}
                        </div>
                    ))
                }

                {/* Actual content placed on top */}
                <div className="blocks-content" ref={contentRef}>
                    {children}
                </div>
            </div>
        </div>
    );
}