export const CvButton = ({text, className}) => {
    return(
        <a href="/Samuel-FullStack-Developer-CV.pdf" download="Samuel-Fernandez-CV.pdf" className={`header__cv-button ${className || ''}`}>{text}</a>
    )
}