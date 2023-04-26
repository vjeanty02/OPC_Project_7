import React from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <header className="header">
            <img src="/logo.svg" alt="Logo" />
            <nav className="header__navbar">
                <NavLink className="header__navbar__link" to="/">Accueil</NavLink>
                <NavLink className="header__navbar__link" to="/about">A propos</NavLink>
            </nav>
        </header>
    )
}


export default Header;