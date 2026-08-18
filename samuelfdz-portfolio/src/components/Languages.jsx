export const Languages = ({options}) => {
    return (
        <div className="languages">
            <h3 className="languages__title">Languages</h3>
            <ul className="languages__list">
                {options.map((option, index) => (
                    <li key={index} className="languages__list__option">{option}</li>
                ))}
            </ul>
        </div>
    )
}