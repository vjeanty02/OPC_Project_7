import React from "react";
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <img className="header_logo"></img>
            <nav className="header__navbar">
                <a className="navbar_link">Accueil</a>
                <a className="navbar_link">A propos</a>
            </nav>
        </header>
    )
}


export default Header;