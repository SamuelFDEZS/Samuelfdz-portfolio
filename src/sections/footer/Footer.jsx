import "./footer.scss"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__background">Samuel Dev</div>
            <span className="footer__copyright">© 2024 SAMUEL.DEV. BUILT IN THE DIGITAL ATELIER.</span>

            <ul className="footer__links">
                <a href="" className="footer__links__item">Github</a>
                <a href="" className="footer__links__item">LinkedIn</a>
                <a href="" className="footer__links__item">Read.cv</a>
            </ul>
        </footer>
    )
}