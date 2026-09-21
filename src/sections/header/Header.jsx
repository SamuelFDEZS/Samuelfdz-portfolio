import { NavBar } from '../../components/NavBar'
import { Languages } from '../../components/Languages'
import { CvButton } from '../../components/CvButton'
import { translations } from '../../data/translations'

import logo from '../../assets/samueldev-logo.png'
import './header.scss'
import { useState } from 'react'
export const Header = ({ activeSection, language, setLanguage }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const t = translations[language].header;
    const sections = [
        { id: 'work', label: t.nav.work },
        { id: 'experience', label: t.nav.experience },
        { id: 'projects', label: t.nav.projects },
        { id: 'about', label: t.nav.about }
    ]

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
                sections={sections}
                isMenuOpen={isMenuOpen}
                activeSection={activeSection}
                cvText={t.downloadCv}
            />

            <div className="header__actions">
                <Languages options={['en', 'es', 'pt']} language={language} setLanguage={setLanguage} />
                <CvButton text={t.downloadCv} className="desktop" />
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`header__hamburger ${isMenuOpen ? "open" : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
    )
}

