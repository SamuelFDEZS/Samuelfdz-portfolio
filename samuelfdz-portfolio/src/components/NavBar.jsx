export const NavBar = ({ sections }) => {
    return (
        <nav className="header__nav">
            <ul className="header__nav__list">
                {sections.map((section, index) => (
                    <li key={index} className="header__nav__list__item">
                        <a href={`#${section.toLowerCase()}`} className="header__nav__list__link">{section}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}