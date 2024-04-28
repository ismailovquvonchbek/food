import "./About.scss";
import bg_img from "../Img/about-bg.png"
import image_big from "../Img/about-img.png"

function About() {
    return (
        <>
            <section className="about">
                <div className="container">
                    <img className="about__bg" src={bg_img} alt="image background" />
                    <img className="about__img" src={image_big} alt="image big" />

                    <div className="about__info">
                        <p className="about__p">About us</p>
                        <h3 className="about__title">
                            Food Stalls with Persons but  to  Product marketing plane catlogues etc to.
                        </h3>
                        <p className="about__text">
                            There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also
                            equipment  make your marketing plane Effective.
                        </p>
                        <button className="about__button">Read More</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;