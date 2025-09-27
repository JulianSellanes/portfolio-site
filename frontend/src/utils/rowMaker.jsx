const breakpoints = [
    { min: 0, max: 320, offset: 0 },
    { min: 480, max: 639, offset: 1 },
    { min: 640, max: 959, offset: 4 },
    { min: 960, max: 1279, offset: 6 },
    { min: 1280, max: Infinity, offset: 8 },
];

export function getOffsetForWidth(w) {
    const bp = breakpoints.find(b => w >= b.min && w <= b.max);
    return bp ? bp.offset : 0;
}

const rowBreakpoints = [
    { min: 0, max: 479, rows: 40 },
    { min: 480, max: 799, rows: 38 },
    { min: 800, max: 959, rows: 26 },
    { min: 960, max: 1279, rows: 26 },
    { min: 1280, max: Infinity, rows: 14 },
];

export function getRowsForWidth(w) {
    const bp = rowBreakpoints.find(b => w >= b.min && w <= b.max);
    console.log(bp);
    return bp ? bp.rows : 10;
}

export function calcCols(offset = 0) {
    const w = window.innerWidth;
    return Math.floor(w / 32) - offset;
}

export function makeRow(cols, type, opts = {}) {
    return Array.from({ length: cols }, (_, i) => {
        if (opts.special && opts.special(i, cols))
            return <div key={`${type}-special-${i}`} className={`block ${opts.special(i, cols)}`} />;

        return <div key={`${type}-${i}`} className={`block ${type}`} />;
    });
}