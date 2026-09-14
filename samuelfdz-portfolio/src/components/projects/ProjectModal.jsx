import { useEffect } from "react";

export const ProjectModal = ({ project, onClose }) => {
    const { github, demo } = project;
    const githubType = typeof github;

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        }
    }, [])
    return (
        <div className="modal-background" onClick={onClose}>
            <div className="modal-background__modal" onClick={(event) => event.stopPropagation()}>
                <div className="modal-background__modal__container">
                    <div className="modal-background__modal__container__cli">
                        <main className="modal-background__modal__container__cli__dots-container">
                            <div className="modal-background__modal__container__cli__dots-container__dot"></div>
                            <div className="modal-background__modal__container__cli__dots-container__dot"></div>
                            <div className="modal-background__modal__container__cli__dots-container__dot"></div>
                        </main>

                        <span className="modal-background__modal__container__cli__text">Obsidian Engine</span>
                    </div>
                    {githubType === 'object' &&
                        <>
                            <a target= "_blank" href={github.frontend} className="modal-background__modal__container__button frontend">Frontend</a>
                            <a target= "_blank" href={demo} className="modal-background__modal__container__button demo">Live Demo</a>
                            <a target= "_blank" href={github.backend} className="modal-background__modal__container__button backend">Backend</a>
                        </>
                    }

                    {githubType === 'string' &&
                        <>
                            <a target= "_blank" href={github} className="modal-background__modal__container__button github">Github</a>

                            <a target= "_blank" href={demo} className="modal-background__modal__container__button demo">Live Demo</a>
                        </>
                    }

                </div>
            </div>
        </div>
    )
}