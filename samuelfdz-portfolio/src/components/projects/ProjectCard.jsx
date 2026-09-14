export const ProjectCard = ({ project, onSelectProject }) => {

    const { id, name, category, description, technologies, image, state} = project;
    return (
        <article
            style={{ '--image-route': `url(${image})` }}
            className={
                `
                    projects__container__list__project-card
                    projects__container__list__project-card--${category}
                    projects__container__list__project-card--${id}
                `
            }
            onClick={() => onSelectProject(project)}
        >

            <main className="projects__container__list__project-card__technologies">

                {technologies.map((technology, index) => (
                    <article key={index}
                        className={`projects__container__list__project-card__technologies__item projects__container__list__project-card__technologies__item--${technology.toLowerCase()}`}>
                        {technology}
                    </article>
                ))}

            </main>

            <h2 className="projects__container__list__project-card__title">{name}</h2>
            <p className="projects__container__list__project-card__description">{description}</p>
            {state != undefined && (
                <span className="projects__container__list__project-card__state">{state}</span>
            )}
        </article>
    )
}