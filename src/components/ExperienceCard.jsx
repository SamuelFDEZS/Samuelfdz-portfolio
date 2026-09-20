
export const ExperienceCard = ({ experienceInfo }) => {
    return (
        <article className="experience__container__card">
            <h3 className="experience__container__card__role">
                {experienceInfo.role}
            </h3>

            <span className="experience__container__card__company">
                {experienceInfo.company}
            </span>

            <p className="experience__container__card__description">
                {experienceInfo.description}
            </p>

            <aside className="experience__container__card__date">
                {experienceInfo.startDate} — {experienceInfo.endDate}
            </aside>
        </article>
    )
}