export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <small>© {year} Julián Sellanes</small>
            </div>
        </footer>
    )
}