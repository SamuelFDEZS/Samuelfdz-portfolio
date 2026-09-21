

export const ExperienceCard = ({ experienceInfo, translations }) => {
    return (
        <article className="experience__container__card">
            <h3 className="experience__container__card__role">
                {translations.role}
            </h3>

            <span className="experience__container__card__company">
                {experienceInfo.company}
            </span>
            <aside className="experience__container__card__date">
                {translations.startDate} — {translations.endDate}
            </aside>
            <p className="experience__container__card__description">
                {translations.description}
            </p>

        </article>
    )
}