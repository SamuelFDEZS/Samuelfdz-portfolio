import { useEffect, useState } from 'react'
import './styles/main.scss'
import { Header } from './sections/header/Header'
import { Hero } from './sections/hero/Hero'
import { Experience } from './sections/experience/Experience'
import { Skills } from './sections/skills/Skills'
import { Projects } from './sections/projects/Projects'
import { Presentation } from './sections/presentation/Presentation'
import { Footer } from './sections/footer/Footer'
function App() {

    const [activeSection, setActiveSection] = useState(null)
    const [Language, setLanguage] = useState('en');

    useEffect(() => {
        const sections = document.querySelectorAll('.section')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, {
            rootMargin: "-25% 0px -55% 0px"
        })

        sections.forEach((section) => {
            observer.observe(section)
        })

        return () => {
            observer.disconnect()
        }


    }, [])

    return (
        <>
            <Header activeSection={activeSection} language={Language} setLanguage={setLanguage} />
            <Hero language={Language} />
            <Experience language={Language} />
            <Skills language={Language} />
            <Projects language={Language} />
            <Presentation language={Language} />
            <Footer language={Language} />
        </>
    )
}

export default App
