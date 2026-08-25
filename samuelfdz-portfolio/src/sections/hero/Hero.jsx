import { Avatar } from "../../components/Avatar"
import { CvButton } from "../../components/CvButton"
import "./hero.scss"

export const Hero = () => {
    return (
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
                    <button className="hero__work__button-container__button">Initiare Contact</button>
                </div>

                <div className="hero__work__socials">
                    <a href="" className="hero__work__socials__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3" /><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" /></svg>
                        <span>LinkedIn</span>
                    </a>

                    <a href="" className="hero__work__socials__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64"><path fill="currentColor" d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15q0-6 3-9s-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9q3 3 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0" /></svg>
                        <span>Github</span>
                    </a>
                </div>
            </section>

            <Avatar />
        </main>
    )
}