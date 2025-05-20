import React, { useState } from "react";
import styles from "./HomePage.module.css";

const images = [
  {
    src: "https://res.cloudinary.com/robinkhickson/image/upload/v1747426346/whale-eye-stars_wrbyke.png",
    alt: "Whale Eye",
  },
  {
    src: "https://res.cloudinary.com/robinkhickson/image/upload/v1747426265/big-esha-eye_yqwves.png",
    alt: "Esha's Eye",
  },
  {
    src: "https://res.cloudinary.com/robinkhickson/image/upload/v1747768581/Cosmic_Vortex_of_Light_and_Darkness_vcxy3y.png",
    alt: "Black Hole",
  },
];

function getRandomIndex(exclude, length) {
  let idx;
  do {
    idx = Math.floor(Math.random() * length);
  } while (idx === exclude);
  return idx;
}

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseEnter = () => {
    setCurrentIndex((prev) => getRandomIndex(prev, images.length));
  };

  const handleMouseLeave = () => {
    setCurrentIndex(0);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {images.map((image, idx) => (
        <img
          key={idx}
          src={image.src}
          alt={image.alt}
          className={`${styles.bgImage} ${
            currentIndex === idx ? styles.visible : styles.hidden
          }`}
        />
      ))}

      <div className={styles.titleWrapper}>
        <a href="/?menu=true" className={styles.titleLink}>
          <h1 className={styles.shimmer}>Quantum HeresY</h1>
        </a>
      </div>
    </div>
  );
}
