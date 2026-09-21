import "./presentation.scss"
import { translations } from "../../data/translations"

export const Presentation = ({ language }) => {
    const t = translations[language].presentation;

    return (
        <section className="presentation section" id="about">

            <main className="presentation__container">

                <article className="presentation__container__item image-wrapper">
                    <div className="presentation__container__item__square"></div>
                    <img src="/assets/presentation/samuel-avatar.png" alt="" className="presentation__container__item__image" />
                </article>

                <article className="presentation__container__item text-wrapper">

                    <h3 className="presentation__container__item__subtitle">{t.subtitle}</h3>

                    <h2 className="presentation__container__item__title">{t.title.line1} <br /> {t.title.line2}</h2>

                    <div className="presentation__container__item__text-container">
                        <p className="presentation__container__item__text-container__text">
                            {t.paragraphs[0]}
                        </p>

                        <p className="presentation__container__item__text-container__text">
                            {t.paragraphs[1]}
                        </p>
                    </div>

                    <div className="presentation__container__item__years">

                        <span className="presentation__container__item__years__year">03+</span>

                        <span className="presentation__container__item__years__text">Years of Mastery</span>

                    </div>
                </article>

            </main>

        </section>
    )
}