// src/ImageSlider.js
import React, { useState } from 'react';
import './gallery.css';

import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';

const images = [
  { src: img1, title: 'TellusInstitute' },
  { src: img2, title: 'TellusInstitute' },
  { src: img3, title: 'TellusInstitute' },
  { src: img4, title: 'TellusInstitute' },
  { src: img5, title: 'TellusInstitute' },
  { src: img6, title: 'TellusInstitute' },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
<div className="gallery">
<section className="slider-container">
      <div className="slider-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-img ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img src={image.src} alt={image.name} />
            <h1>{image.name}</h1>
            <div className="details">
              <h2>{image.name}</h2>
              <p>{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Gallery;
