import "./footer.scss"
import { translations } from "../../data/translations"

export const Footer = ({ language }) => {

    const t = translations[language].footer;
    return (
        <footer className="footer">
            <div className="footer__background">Samuel Dev</div>
            <span className="footer__copyright">{t.copyright}</span>

            <ul className="footer__links">
                <a href="https://github.com/SamuelFDEZS" target="_blank" className="footer__links__item">Github</a>
                <a href="https://www.linkedin.com/in/samuel-fernandezz/" target="_blank" className="footer__links__item">LinkedIn</a>
                <a href="mailto:thggsamuel@gmail.com" target="_blank" className="footer__links__item">Mail</a>
            </ul>
        </footer>
    )
}