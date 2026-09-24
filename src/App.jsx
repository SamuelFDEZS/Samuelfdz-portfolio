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
    const [language, setLanguage] = useState('en');

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

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language])


    return (
        <>
            <Header activeSection={activeSection} language={language} setLanguage={setLanguage} />
            <Hero language={language} />
            <Experience language={language} />
            <Skills language={language} />
            <Projects language={language} />
            <Presentation language={language} />
            <Footer language={language} />
        </>
    )
}

export default App
