// Importer React et les hooks
import React, { useState, useEffect } from "react";

import "./Carousel.css"

function Carousel({ photos }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Vérifier s'il y a plus d'une photo avant de créer l'intervalle
    if (photos.length > 1) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [index]);

  function nextSlide() {
    setIndex((index + 1) % photos.length);
  }

  function prevSlide() {
    setIndex((index - 1 + photos.length) % photos.length);
  }

  return (
    <div className="carousel">
      <img className="carousel__img" src={photos[index]} alt={`Photo ${index + 1} du logement`} />
      {(photos.length > 1) && (
        <>
          <button className="carousel__button carousel__button--prev" onClick={prevSlide}>
            <img src="/icone_carousel_prev.svg" alt="icone_carousel_prev" />
          </button>
          <button className="carousel__button carousel__button--next" onClick={nextSlide}>
            <img src="/icone_carousel_next.svg" alt="icone_carousel_next" />
          </button>
        </>
      )}
    </div>
  );
}

export default Carousel;