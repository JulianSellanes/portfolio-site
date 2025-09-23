export const PixelCard = ({ title, subtitle, img, children, ctaText, ctaHref }) => {

    return (
        <article className="card">
            {img && <img src={img} alt="" loading="lazy" />}

            <h3>{title}</h3>

            {subtitle && <p className="sub">{subtitle}</p>}

            {children}

            {ctaHref && (
                <a className="btn" href={ctaHref} target="_blank" rel="noreferrer">{ctaText || 'View'}</a>
            )}
        </article>
    )
}