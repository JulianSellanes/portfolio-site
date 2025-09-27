const breakpoints = [
    { min: 0, max: 320, offset: 0 },
    { min: 480, max: 639, offset: 1 },
    { min: 640, max: 959, offset: 4 },
    { min: 960, max: 1279, offset: 6 },
    { min: 1280, max: Infinity, offset: 8 },
];

function getOffset(w) {
    const bp = breakpoints.find(b => w >= b.min && w <= b.max);
    return bp ? bp.offset : 0;
}

export function calcCols() {
    const w = window.innerWidth;
    const offset = getOffset(w);
    return Math.floor(w / 32) - offset;
}