import { useEffect } from "react";

export const ProjectModal = ({ project, onClose }) => {
    const { github, demo, name } = project;
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

                    <h2 className="modal-background__modal__container__project-name">{name}</h2>

                    <div className="modal-background__modal__container__button-container">

                        {githubType === 'object' &&
                            <>
                                <a target="_blank" href={github.frontend} className="modal-background__modal__container__button-container__button frontend">Frontend</a>
                                {demo && <a target="_blank" href={demo} className="modal-background__modal__container__button-container__button demo">Live Demo</a>}
                                <a target="_blank" href={github.backend} className="modal-background__modal__container__button-container__button backend">Backend</a>
                            </>
                        }

                        {githubType === 'string' &&
                            <>
                                <a target="_blank" href={github} className="modal-background__modal__container__button-container__button github">Github</a>

                                {demo && <a target="_blank" href={demo} className="modal-background__modal__container__button-container__button demo">Live Demo</a>}
                            </>
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}