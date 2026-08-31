import { Avatar } from "../../components/Avatar"
import { CvButton } from "../../components/CvButton"
import "./hero.scss"

export const Hero = () => {
    return (
        <>
            <main className="hero">
                <section className="hero__work">
                    <h1 className="hero__work__title">
                        <span className="hero__work__title__word--1">Crafting</span>
                        <span className="hero__work__title__word--2">Digital</span>
                        <span className="hero__work__title__word--3">Experiences.</span>
                    </h1>
                    <p className="hero__work__description">
                        I build modern web experiences from front to back, combining thoughtful design with solid engineering.
                        This is where ideas become products
                    </p>

                    <div className="hero__work__button-container">
                        <CvButton text="Explore Work" className="hero__work__button-container__button--work" />
                        <button className="hero__work__button-container__button--contact">Initiate Contact</button>
                    </div>

                    <div className="hero__work__socials">
                        <a href="" className="hero__work__socials__link">
                            <svg xmlns="http://www.w3.org/2000/svg" className="hero__work__socials__link__icon--1" viewBox="0 0 32 32"><path fill="currentColor" d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756m2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z" /></svg>
                            <span>LinkedIn</span>
                        </a>

                        <a href="" className="hero__work__socials__link">
                            <svg xmlns="http://www.w3.org/2000/svg" className="hero__work__socials__link__icon--2" viewBox="0 0 64 64"><path fill="currentColor" d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15q0-6 3-9s-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9q3 3 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0" /></svg>
                            <span>Github</span>
                        </a>
                    </div>
                </section>

                <Avatar />
            </main>
            <hr />
        </>

    )
}