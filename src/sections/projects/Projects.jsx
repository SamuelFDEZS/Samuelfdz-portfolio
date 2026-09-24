import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { ProjectList } from "../../components/projects/ProjectList"
import { ProjectModal } from "../../components/projects/ProjectModal"
import projects from "../../data/projects.json"
import { translations } from "../../data/translations"
import "./projects.scss"

export const Projects = ({ language }) => {

    const t = translations[language].projects;

    const projectSlides = [
        {
            id: "apps",
            label: t.slides.apps
        },
        {
            id: "recreations",
            label: t.slides.recreations
        },
        {
            id: "designs",
            label: t.slides.designs
        }
    ]

    const localizedProjects = projects.map((project) => ({
        ...project,
        ...t.items[project.id],
        ...(project.stateKey && {
            state: t.states[project.stateKey]
        })
    }))

    const [slide, setSlide] = useState('apps')
    const [selectedProject, setSelectedProject] = useState(null);

    const refApps = useRef(null)
    const refRecreations = useRef(null)
    const refDesigns = useRef(null)


    const refs = [refApps, refRecreations, refDesigns]
    const [offsetValue, setOffsetValue] = useState(0);
    const [offsetWidth, setOffsetWidth] = useState(0)

    const filteredProjects = localizedProjects.filter(project => project.category === slide)


    const handleCloseModal = () => {
        setSelectedProject(null);
    }

    useEffect(() => {
        const slideRefs = {
            apps: refApps,
            recreations: refRecreations,
            designs: refDesigns
        }

        const currentSlide = slideRefs[slide].current

        setOffsetValue(currentSlide?.offsetLeft)
        setOffsetWidth(currentSlide?.offsetWidth)
    }, [slide, language])

    return (
        <>
            <section className="projects section" id="projects">
                <h1 className="projects__title">{t.title}</h1>

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
                                key={projectSlide.id}
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
                    <ProjectList key={slide} filteredProjects={filteredProjects} slide={slide} onSelectProject={setSelectedProject} />
                </main>

                {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
            </section>
            <hr />
        </>
    )
}