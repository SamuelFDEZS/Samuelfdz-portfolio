import experiences from "../../data/experience.json"
import { translations } from "../../data/translations"
import { ExperienceCard } from "../../components/ExperienceCard"
import "./experience.scss"

export const Experience = ({ language }) => {

    const t = translations[language].experience;
    return (
        <>
            <section className="experience section" id="experience">
                <h1 className="experience__title">{t.title}</h1>
                <main className="experience__container">
                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.id}
                            experienceInfo={experience}
                            translations={t.jobs[experience.id]}
                        />
                    ))}
                </main>
            </section>
            <hr />
        </>
    )
}