import { useEffect } from "react";

export const ProjectModal = ({ project, onClose }) => {
    const { github, demo, name, image } = project;
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

                    <div className="modal-background__modal__container__image-container">
                        <img src={image} alt={name} className="modal-background__modal__container__image-container__image" />
                    </div>
                    <div className="modal-background__modal__container__button-container">

                        {githubType === 'object' &&
                            <>
                                <a target="_blank" href={github.frontend} className="modal-background__modal__container__button-container__button frontend"> <svg xmlns="http://www.w3.org/2000/svg" width="23.98" height="24" viewBox="0 0 1024 1025"><path fill="currentColor" d="M1006 555L808 815q-18 17-43.5 17T721 814.5t-18-43t18-43.5l165-216l-165-216q-18-18-18-43t18-43t43.5-18t43.5 18l198 259q18 18 18 43t-18 43M512 961q-1 3-3 11.5t-3 11.5l-3.5 10.5l-5 10.5l-7.5 8l-10.5 7l-13.5 3.5l-18 1.5q-24 0-46-25t-16-48L512 64q17-64 96-64q22 0 29.5 23.5T638 73zM303 814.5Q285 832 259.5 832T216 815L18 555Q0 537 0 512t18-43l198-259q18-18 43.5-18t43.5 18t18 43t-18 43L138 512l165 216q18 18 18 43.5t-18 43"/></svg> Frontend</a>
                                {demo && <a target="_blank" href={demo} className="modal-background__modal__container__button-container__button demo"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 5.912c0-.155.037-.307.107-.443c.23-.44.75-.599 1.163-.354l10.29 6.088c.14.083.255.206.332.355c.23.44.08.995-.332 1.239L7.27 18.885a.8.8 0 0 1-.415.115C6.383 19 6 18.592 6 18.089z"/></svg> Live Demo</a>}
                                <a target="_blank" href={github.backend} className="modal-background__modal__container__button-container__button backend"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14"><g fill="none"><path fill="#fff" d="M7 5.74c3.577 0 5.588-.89 5.588-2.474C12.588 1.683 10.577.792 7 .792s-5.589.89-5.589 2.474S3.423 5.74 7 5.74"/><path fill="#d7e0ff" fill-rule="evenodd" d="M12.57 3.525C12.357 4.946 10.375 5.74 7 5.74c-3.471 0-5.468-.838-5.584-2.335c-.07.944-.12 2.089-.12 3.006c0 1.268.148 2.845.271 3.94c.095.842.564 1.598 1.338 1.945c.95.425 2.407.912 4.095.912s3.144-.487 4.095-.912c.774-.347 1.243-1.103 1.337-1.946c.124-1.094.271-2.67.271-3.94c0-.978-.057-1.94-.134-2.885" clip-rule="evenodd"/><path stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M7 5.74c3.577 0 5.588-.89 5.588-2.474C12.588 1.683 10.577.792 7 .792s-5.589.89-5.589 2.474S3.423 5.74 7 5.74M1.344 8a12.48 12.48 0 0 0 11.312 0v0"/><path stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M1.417 3.395a44 44 0 0 0-.12 3.016c0 1.268.147 2.845.27 3.94c.095.842.564 1.598 1.338 1.945c.951.426 2.408.912 4.095.912c1.688 0 3.144-.487 4.095-.912c.774-.346 1.243-1.103 1.338-1.945c.123-1.095.27-2.672.27-3.94c0-.978-.056-1.94-.133-2.884"/></g></svg> Backend</a>
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