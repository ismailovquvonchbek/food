import "./Feat.scss";
import home from "../Img/home.png"
import delivery from "../Img/delivery.png"
import smile from "../Img/smile.png"

function Feat() {
    return (
        <>
            <section className="feat">
                <div className="container">
                    <p className="feat__p">Features</p>
                    <h2 className="feat__heading">Food with a New Passion</h2>
                    <ul className="feat__list">
                        <li className="feat__item">
                            <div className="feat__imgBox">
                                <img className="feat__img" src={home} alt="Image" width={45} height={45} />
                            </div>

                            <h3 className="feat__title">Quality Food</h3>
                            <p className="feat__text">
                                It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                            </p>
                        </li>

                        <li className="feat__item">
                            <div className="feat__imgBox">
                                <img className="feat__img" src={delivery} alt="Image" width={43} height={43} />
                            </div>

                            <h3 className="feat__title">Food Delivery</h3>
                            <p className="feat__text">
                                It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                            </p>
                        </li>

                        <li className="feat__item">
                            <div className="feat__imgBox">
                                <img className="feat__img" src={smile} alt="Image" width={45} height={45} />
                            </div>

                            <h3 className="feat__title">Super Taste</h3>
                            <p className="feat__text">
                                It can be a very secure path to earn good money and make you very successful creative entrepreneur.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Feat;