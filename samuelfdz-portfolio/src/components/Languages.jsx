import { useState } from "react"

export const Languages = ({ options }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('En')

    const handleSelectLanguage = (language) => {
        setSelectedLanguage(language)
    }

    return (
        <div className="language">
            <button
                className="language__trigger" popoverTarget="language-menu">

                {selectedLanguage} <svg xmlns="http://www.w3.org/2000/svg" width="82.29" height="24" viewBox="0 0 24 7"><path fill="currentColor" d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z"/></svg>
            </button>

            <div id="language-menu" popover="auto">
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={ () => handleSelectLanguage(option)}
                        popoverTarget="language-menu"
                        popoverTargetAction="hide"
                    >
                        {option}
                    </button>
                ))} 
            </div>
        </div>
    )
}