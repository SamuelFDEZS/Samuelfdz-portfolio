import { CvButton } from "./CvButton"

export const NavBar = ({ sections, isMenuOpen, activeSection }) => {
    return (
        <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="header__nav__list">
                {sections.map((section, index) => (
                    <li key={index} className={`header__nav__list__item ${activeSection === section.toLowerCase() ? 'active' : ''}`}>
                        <a href={`#${section.toLowerCase()}`} className="header__nav__list__link">{section}</a>
                    </li>
                ))}
                <CvButton text="Download CV" className="mobile" />
            </ul>
        </nav>
    )
}