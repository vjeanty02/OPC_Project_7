import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";

function Card() {
    return <Link className="card">
    <div class="card__content">
      <h3 className="card__content__title">Titre de la location</h3>
    </div>
  </Link>
}

export default Card;