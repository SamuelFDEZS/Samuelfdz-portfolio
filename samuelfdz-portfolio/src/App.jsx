import './App.scss'
import './styles/main.scss'
import { Header } from './sections/header/Header'
import { Hero } from './sections/hero/Hero'
import { Experience } from './sections/experience/Experience'
import { Skills } from './sections/skills/Skills'
import { Projects } from './sections/projects/Projects'
import { Presentation } from './sections/presentation/Presentation'
import { Footer } from './sections/footer/Footer'
function App() {

    return (
        <>
            <div className="screen-size"></div>
            <Header />
            <Hero />
            <Experience />
            <Skills />
            <Projects />
            <Presentation />
            <Footer />
        </>
    )
}

export default App
