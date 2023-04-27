import React from "react";
import "./Banner.css"

function Banner({txt}) {
    return(
        <div className="banner">
            <p className="banner__txt">{txt}</p>
        </div>
    );
}

export default Banner;