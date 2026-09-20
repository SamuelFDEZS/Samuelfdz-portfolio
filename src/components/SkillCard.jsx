export const SkillCard = ({ skillName, skillLogo, skillColor }) => {
    return (
        <article
            className="skills__container__card"
            style={{ '--skill-color': skillColor }}
        >

            <img
                src={skillLogo}
                alt={skillName}
            />

            <h2>{skillName}</h2>
        </article>
    )
}