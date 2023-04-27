import React from "react";
import "./Banner.css"

function Banner({page,txt}) {
    return(
        <div className={"banner banner--" + page}> 
            <p className="banner__txt">{txt}</p>
        </div>
    );
}

export default Banner;