import { CvButton } from "./CvButton"

export const NavBar = ({ sections, isMenuOpen, activeSection, cvText }) => {
    return (
        <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="header__nav__list">
                {sections.map((section) => (
                    <li key={section.id} className={`header__nav__list__item ${activeSection === section.id ? 'active' : ''}`}>
                        <a href={`#${section.id}`} className="header__nav__list__link">{section.label}</a>
                    </li>
                ))}
                <CvButton text={cvText} className="mobile" />
            </ul>
        </nav>
    )
}