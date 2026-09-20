import { useEffect, useState } from 'react'
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

    const [activeSection, setActiveSection] = useState(null)

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
            <div className="screen-size"></div>
            <Header activeSection={activeSection} />
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
