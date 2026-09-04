import skills from '../../data/skills.json'
import { SkillCard } from '../../components/SkillCard'
import "./skills.scss"

export const Skills = () => {
    return (
        <section className="skills">
            <h1 className="skills__title">Skills</h1>

            <main className="skills__container">
                {skills.map((skill) => (
                    <SkillCard key={skill.id} skillName={skill.name} skillLogo={skill.logo} skillColor={skill.color}/>
                ))}
            </main>
        </section>
    )
}