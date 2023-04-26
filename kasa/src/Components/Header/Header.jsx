import React from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <img className="header_logo"></img>
            <nav className="header__navbar">
                <NavLink className="navbar_link" to="/">Accueil</NavLink>
                <NavLink className="navbar_link" to="/about">A propos</NavLink>
            </nav>
        </header>
    )
}


export default Header;