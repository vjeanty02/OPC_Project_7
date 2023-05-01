// Importer React et les hooks
import React, { useState, useEffect } from "react";

function Carousel({ photos }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);}, [index]);

  function nextSlide() {
    setIndex((index + 1) % photos.length);
  }

  function prevSlide() {
    setIndex((index - 1 + photos.length) % photos.length);
  }

  return (
    <div className="carousel">
      <img className="carousel__img" src={photos[index]} alt={`Photo ${index + 1} du logement`} />
      <button className="carousel__button carousel__button--prev" onClick={prevSlide} >
        &lt;
      </button>
      <button className="ccarousel__button carousel__button--next" onClick={nextSlide} >
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
 