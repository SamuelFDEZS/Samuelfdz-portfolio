export const CvButton = ({text, className, link, download = false}) => {
    return(
        <a href={link} download={download} className={`header__cv-button ${className || ''}`}>{text}</a>
    )
}