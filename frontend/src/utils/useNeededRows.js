import { useEffect, useState } from "react";

// Hook to calculate how many rows of blocks are needed to fit the height of dynamic content
export function useNeededRows(ref, { block = 32, min = 1, extra = 0 } = {}) {
    const [rows, setRows] = useState(min);

    useEffect(() => {
        if (!ref.current) return;

        const update = () => {
            if (!ref.current) return;

            // Measure content height (scrollHeight or bounding box)
            const h = Math.max(ref.current.scrollHeight || 0, ref.current.getBoundingClientRect().height || 0);

            // Calculate number of block rows needed
            const needed = Math.max(min, Math.ceil(h / block) + extra);
            setRows(needed);
        };

        // Run immediately and once more after paint
        update();
        const t = setTimeout(update, 0);

        // Watch for size changes inside content
        const ro = new ResizeObserver(update);
        ro.observe(ref.current);

        // Recalculate on window resize
        window.addEventListener("resize", update);

        return () => {
            clearTimeout(t);
            ro.disconnect();
            window.removeEventListener("resize", update);
        };
    }, [ref, block, min, extra]);

    return rows;
}