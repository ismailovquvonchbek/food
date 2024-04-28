import "./Menu.scss";

import img1 from "../Img/menu1.png"
import img2 from "../Img/menu2.png"
import img3 from "../Img/menu3.png"
import img4 from "../Img/menu4.png"
import img5 from "../Img/menu5.png"
import img6 from "../Img/menu6.png"

function Menu() {
    return (
        <>
            <section className="menu">
                <div className="container">
                    <p className="menu__p">MENU</p>
                    <h4 className="menu__title">Food Full of treaty Love</h4>
                    <p className="menu__text">
                        There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers,
                    </p>

                    <ul className="menu__list">
                        <li className="menu__item">
                            <img src={img1} alt="Foods" />
                            <div className="manu__titleBox">
                                <h4 className="menu__head">Vegie Muffen</h4>
                                
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Menu;