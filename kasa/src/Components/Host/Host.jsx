import React from "react";
import "./Host.css";

function Host({name, picture }) {
  const words = name.split(" ");
  const firstName = words[0];
  const lastName = words[words.length - 1];

  return (
    <div className="host">
      <p className="host__name host__name--firstName">{firstName}</p>
      <p className="host__name host__name--lastName">{lastName}</p>
      <img src={picture} alt={name} className="host__picture" />
    </div>
  );
}

export default Host;