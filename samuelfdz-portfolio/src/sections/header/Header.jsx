import { NavBar } from '../../components/NavBar'
import { Languages } from '../../components/Languages'
import { CvButton } from '../../components/CvButton'

import logo from '../../assets/samueldev-logo.png'
import './header.scss'
import { useState } from 'react'
export const Header = ({ activeSection }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="header">
            <a className="header__link" href="#">
                <img
                    src={logo}
                    alt="Samuel.Dev"
                    className='header__link__logo'
                />
            </a>
            <NavBar
                sections={['Work', 'Experience', 'Projects', 'About']}
                isMenuOpen={isMenuOpen}
                activeSection={activeSection}
            />

            <div className="header__actions">
                <Languages options={['En', 'Es', 'Pt']} />
                <CvButton text="Download CV" className="desktop" />
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`header__hamburger ${isMenuOpen ? "open" : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
    )
}

