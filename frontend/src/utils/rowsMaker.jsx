export function makeRow(cols, type, opts = {}) {
    return Array.from({ length: cols }, (_, i) => {
        if (opts.special && opts.special(i, cols))
            return <div key={`${type}-special-${i}`} className={`block ${opts.special(i, cols)}`} />;

        return <div key={`${type}-${i}`} className={`block ${type}`} />;
    });
}