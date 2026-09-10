import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { ProjectList } from "../../components/projects/ProjectList"
import projects from "../../data/projects.json"
import "./projects.scss"

export const Projects = () => {
    const projectSlides = [
        {
            id: "apps",
            label: "Apps"
        },

        {
            id: "recreations",
            label: "Recreations"
        },

        {
            id: "designs",
            label: "Designs"
        }
    ]


    const [slide, setSlide] = useState('apps')

    const refApps = useRef(null)
    const refRecreations = useRef(null)
    const refDesigns = useRef(null)


    const refs = [refApps, refRecreations, refDesigns]
    const [offsetValue, setOffsetValue] = useState(0);
    const [offsetWidth, setOffsetWidth] = useState(0)

    const slideRefs = {
        apps: refApps,
        recreations: refRecreations,
        designs: refDesigns
    }

    const filteredProjects = projects.filter(project => project.category === slide)


    useEffect(() => {
        setOffsetValue(slideRefs[slide].current?.offsetLeft);
        setOffsetWidth((slideRefs[slide].current?.offsetWidth));
    }, [slide])

    return (
        <section className="projects">
            <h1 className="projects__title">Projects</h1>

            <nav className="projects__slides">
                <ul
                    className="projects__slides__list"
                    style={{
                        '--underline-offsetleft': `${offsetValue}px`,
                        '--underline-offsetwidth': `${offsetWidth}px`
                    }}
                >
                    {projectSlides.map((projectSlide, index) => (
                        <li
                            key={index}
                            ref={refs[index]}
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
                <ProjectList filteredProjects={filteredProjects} slide={slide}/>
            </main>
        </section>
    )
}