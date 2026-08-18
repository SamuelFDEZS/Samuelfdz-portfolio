import { NavBar } from '../../components/NavBar'
import { Languages } from '../../components/Languages'
import { CvButton } from '../../components/CvButton'
export const Header = () => {
    return (
        <header className="header">
            <img src='../../assets/samueldev-logo.png' className='header__logo' />
            <NavBar sections={['Experience', 'Projects', 'About']} />
            <Languages options={['English', 'Spanish', 'Portuguese']} />
            <CvButton />
        </header>
    )
}

