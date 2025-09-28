// Define breakpoints for responsive column offset
const breakpoints = [
    { min: 0, max: 320, offset: 0 },
    // { min: 480, max: 639, offset: 1 },
    // { min: 480, max: 599, offset: 4 },
    { min: 600, max: 1099, offset: 4 },
    { min: 1100, max: Infinity, offset: 13 },
];

// Find which breakpoint matches the screen width
function getOffset(w) {
    const bp = breakpoints.find(b => w >= b.min && w <= b.max);
    return bp ? bp.offset : 0;
}

// Calculate how many columns of 32px blocks fit on screen
export function calcCols() {
    const w = window.innerWidth;
    const offset = getOffset(w);
    return Math.floor(w / 32) - offset;
}