import React from "react";
import "./Banner.css"

function Banner({page,txt}) {
    return(
        <section className={"banner banner--" + page}> 
            <p className="banner__txt">{txt}</p>
        </section>
    );
}

export default Banner;