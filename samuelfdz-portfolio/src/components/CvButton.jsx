export const CvButton = ({text, className}) => {
    return(
        <button className={`header__cv-button ${className || ''}`}>{text}</button>
    )
}