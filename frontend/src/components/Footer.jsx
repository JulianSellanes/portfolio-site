import "./Footer.css";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer-top">

                <div className="pillar"></div>

                <div className="planks">
                    <i><small>© {year} Julián Sellanes</small></i>
                </div>

                <div className="pillar"></div>
            </div>
            <div className="foundation"></div>
        </div>
    );
}