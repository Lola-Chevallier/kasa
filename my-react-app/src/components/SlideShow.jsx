import React, { useState } from "react";
import styles from "../assets/styles/logementsDetails.module.scss";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slider}>
      {images.length > 1 && (
        <>
          <button className={styles.prev} onClick={prevSlide}>‹</button>
          <button className={styles.next} onClick={nextSlide}>›</button>
          <p className={styles.counter}>{currentIndex + 1} / {images.length}</p>
        </>
      )}
      <img src={images[currentIndex]} alt={`slide ${currentIndex + 1}`} />
    </div>
  );
};

export default Slideshow;