import "./presentation.scss"

export const Presentation = () => {
    return (
        <section className="presentation">

            <main className="presentation__container">

                <article className="presentation__container__item image-wrapper">
                    <div className="presentation__container__item__square"></div>
                    <img src="/assets/presentation/samuel-avatar.png" alt="" className="presentation__container__item__image" />
                </article>

                <article className="presentation__container__item text-wrapper">

                    <h3 className="presentation__container__item__subtitle">The architect</h3>

                    <h2 className="presentation__container__item__title">Beyond <br /> the DOM.</h2>

                    <div className="presentation__container__item__text-container">
                        <p className="presentation__container__item__text-container__text">
                        I’m a full-stack developer with a strong focus on front-end development, building interfaces that feel as good to use as they look. I care about clean structure, thoughtful interaction, and the small visual details that make a product feel polished.
                        </p>

                        <p className="presentation__container__item__text-container__text">
                        I enjoy turning ideas into responsive, maintainable experiences using modern web technologies across both front-end and back-end. While React and interface development are where I feel most at home, I also enjoy working across the stack to understand how the whole product comes together.
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