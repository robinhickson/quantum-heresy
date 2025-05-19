import React, { useState } from 'react';

const images = [
  'https://res.cloudinary.com/robinkhickson/image/upload/v1747426346/whale-eye-stars_wrbyke.png',
  'https://res.cloudinary.com/robinkhickson/image/upload/v1747429719/black-hole-large-accretion_ymdxb7.png',
];

const defaultImage = 'https://res.cloudinary.com/robinkhickson/image/upload/v1747426265/big-esha-eye_yqwves.png';

export default function HoverEyeImage({ onActivateMenu }) {
  const [src, setSrc] = useState(defaultImage);
  const [fade, setFade] = useState(false);

  const handleMouseEnter = () => {
    const next = images[Math.floor(Math.random() * images.length)];
    setFade(true);
    setTimeout(() => {
      setSrc(next);
      setFade(false);
    }, 300);
  };

  const handleMouseLeave = () => {
    setFade(true);
    setTimeout(() => {
      setSrc(defaultImage);
      setFade(false);
    }, 300);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden cursor-pointer">
      <h1
        onClick={onActivateMenu}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl shimmer font-syne z-10 text-center"
      >
        Quantum Heresy
      </h1>
      <img
        src={src}
        alt="Quantum Gaze"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
}