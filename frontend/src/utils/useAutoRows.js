import { useEffect, useState } from "react";

export function useAutoRows(ref, { block = 32, min = 1, extra = 0 } = {}) {
    const [rows, setRows] = useState(min);

    useEffect(() => {
        if (!ref.current) return;

        const update = () => {
            if (!ref.current) return;
            const h = Math.max(ref.current.scrollHeight || 0, ref.current.getBoundingClientRect().height || 0);
            const needed = Math.max(min, Math.ceil(h / block) + extra);
            setRows(needed);
        };

        // Initial + microtask to catch font/wrapping after paint
        update();
        const t = setTimeout(update, 0);

        // Observe content changes
        const ro = new ResizeObserver(update);
        ro.observe(ref.current);

        // Also respond to window resizes (reflow/wrapping)
        window.addEventListener("resize", update);

        return () => {
            clearTimeout(t);
            ro.disconnect();
            window.removeEventListener("resize", update);
        };
    }, [ref, block, min, extra]);

    return rows;
}