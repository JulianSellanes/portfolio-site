// OLD SYSTEM
// Define breakpoints for responsive column offset
const offsetBreakpoints = [
    { min: 0, max: 320, offset: 0 },
    // { min: 480, max: 639, offset: 1 },
    // { min: 480, max: 599, offset: 4 },
    { min: 600, max: 1099, offset: 4 },
    { min: 1100, max: Infinity, offset: 13 },
];

// Find which breakpoint matches the screen width
function getOffset(w) {
    const bp = offsetBreakpoints.find(b => w >= b.min && w <= b.max);
    return bp ? bp.offset : 0;
}

// NEW SYSTEM
// Define breakpoints for custom column number
const customBreakpoints = [
    { min: 0, max: 479, cols: 10 },
    { min: 480, max: 639, cols: 15 },
    { min: 640, max: 799, cols: 20 },
    { min: 800, max: 959, cols: 25 },
    { min: 960, max: 1119, cols: 25 },
    { min: 1120, max: 1279, cols: 30 },
    { min: 1280, max: Infinity, cols: 35 },
];

// Find which breakpoint matches the screen width
function getCustomCols(w) {
    const bp = customBreakpoints.find(b => w >= b.min && w <= b.max);
    return bp ? bp.cols : 10;
}

// Calculate how many columns of 32px blocks fit on screen
export function calcCols() {
    // OLD SYSTEM
    // const w = window.innerWidth;
    // const offset = getOffset(w);
    // return Math.floor(w / 32) - offset;

    // NEW SYSTEM
    const w = window.innerWidth;
    return getCustomCols(w);
}