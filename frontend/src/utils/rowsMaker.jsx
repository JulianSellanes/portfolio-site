// Generate a row of block divs based on number of columns and block type
export function makeRow(cols, type, opts = {}) {
    return Array.from({ length: cols }, (_, i) => {
        // If "special" function provided, replace some blocks
        if (opts.special && opts.special(i, cols))
            return <div key={`${type}-special-${i}`} className={`block ${opts.special(i, cols)}`} />;

        // Default block type
        return <div key={`${type}-${i}`} className={`block ${type}`} />;
    });
}