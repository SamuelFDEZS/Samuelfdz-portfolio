import { NavBar } from '../../components/NavBar'
import { Languages } from '../../components/Languages'
import { CvButton } from '../../components/CvButton'

import logo from '../../assets/samueldev-logo.png'
import './header.scss'
export const Header = () => {
    return (
        <header className="header">
            <a className="header__link" href="#">
                <img
                    src={logo}
                    alt="Samuel.Dev"
                    className='header__link__logo'
                />
            </a>
            <NavBar sections={['Experience', 'Projects', 'About']} />
            <Languages options={['English', 'Spanish', 'Portuguese']} />
            <CvButton />
        </header>
    )
}

