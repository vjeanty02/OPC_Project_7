import React from "react";
import "./Error.css"
import { Link } from "react-router-dom";


function Error() {
    return (
        <div className="Error">
            <h1>Error</h1>
            <Link to="/">Go to Home</Link>
        </div>
    );
}


export default Error;