import { NavBar } from '../../components/NavBar'
import { Languages } from '../../components/Languages'
import { CvButton } from '../../components/CvButton'

import logo from '../../assets/samueldev-logo.png'
import './header.scss'
import { useState } from 'react'
export const Header = () => {

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
            />

            <div className="header__actions">
                <Languages options={['En', 'Es', 'Pt']} />
                <CvButton text="Download CV" />
            </div>
            <span onClick={() => setIsMenuOpen(!isMenuOpen)} className="header__hamburger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z" /></svg>
            </span>
        </header>
    )
}

