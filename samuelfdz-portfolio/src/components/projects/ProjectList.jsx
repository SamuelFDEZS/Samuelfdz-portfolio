import { ProjectCard } from "./ProjectCard"

export const ProjectList = ({ filteredProjects, slide }) => {
    return (
        <section className={`projects__container__list projects__container__list--${slide}`}>
            {
                filteredProjects.map((project) => (
                    <ProjectCard
                        project={project}
                        key={project.id}
                    />
                ))
            }
        </section>
    )
}