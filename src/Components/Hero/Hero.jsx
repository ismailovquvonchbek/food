import "./Hero.scss";
import HeroImg from "../Img/hero_img.png"

function Hero() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero__info">
                        <h1 className="hero__heading">
                            Making time a good time by making food the good food.
                        </h1>
                        <p className="hero__text">
                            There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,
                        </p>

                        <div className="hero__buttonGroup">
                            <button className="hero__btn1">Order Now</button>
                            <button className="hero__btn2">Food Details</button>
                        </div>
                    </div>

                    <img className="hero__img" src={HeroImg} alt="Image" width={800} height={670}/>

                </div>
            </section>
        </>
    )
}

export default Hero;