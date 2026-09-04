import experiences from "../../data/experience.json"
import { ExperienceCard } from "../../components/ExperienceCard"
import "./experience.scss"

export const Experience = () => {
    return (
        <>
            <section className="experience">
                <h1 className="experience__title">Experience</h1>
                <main className="experience__container">
                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.id}
                            experienceInfo={experience}
                        />
                    ))}
                </main>
            </section>
            <hr />
        </>
    )
}