import { NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../Img/logotip.svg"
import React from "react";

function Header() {
    const Xref = React.useRef()
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__info">
                        <NavLink className="header__link" to={"#"}>
                            <img className="header__logo" src={Logo} alt="Logo" width={44} height={43} />
                        </NavLink>

                        <ul className="nav__list" ref={Xref}>
                            <li className="nav__item">
                                <NavLink className="nav__link" to={"home"}> Home </NavLink>
                            </li>

                            <li className="nav__item">
                                <NavLink className="nav__link" to={"about"}> About us </NavLink>
                            </li>

                            <li className="nav__item">
                                <NavLink className="nav__link" to={"menu"}> Menu </NavLink>
                            </li>

                            <li className="nav__item">
                                <NavLink className="nav__link" to={"features"}> Features </NavLink>
                            </li>

                            <li className="nav__item">
                                <NavLink className="nav__link" to={"contact"}> Contact us </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="header__buttons">
                        <button className="header__btn">Booking Now</button>
                        <button className="header__menu" onClick={() => {
                            Xref.current.classList.toggle("nav__active")
                        }}>x</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;