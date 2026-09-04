import { useState } from "react"
import { Recreations } from "../../components/Projects/Recreations"
import { Apps } from "../../components/Projects/Apps"
import { Designs } from "../../components/Projects/Designs"

export const Projects = () => {
    const projectSlides = [
        {
            id: "APPS",
            label: "Apps"
        },

        {
            id: "RECREATIONS",
            label: "Recreations"
        },

        {
            id: "DESIGNS",
            label: "Designs"
        }
    ]

    const slideElements = {
        Apps: <Apps />,
        Recreations: <Recreations />,
        Designs: <Designs />
    }

    const [slide, setSlide] = useState('APPS')
    return (
        <section className="projects">
            <h1 className="projects__title">Projects</h1>

            <nav className="projects__slides">
                <ul className="projects__slides__list">
                    {projectSlides.map((projectSlide) => (
                        <li
                            className={`projects__slides__list__item
                            ${slide === projectSlide.id
                            ? 'projects__slides__list__item--selected'
                            : ''
                        }`}
                            onClick={() => setSlide(projectSlide.id)}
                        >
                            {projectSlide.label}
                        </li>
                    ))}
                </ul>
            </nav>

            <main className="projects__container">
                {slideElements[slide]}
            </main>
        </section>
    )
}