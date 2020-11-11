import React, { useState } from 'react';

function Slider() {

  const [slides] = useState([
    'images/slides/stekjesslide02.jpg',
    'images/slides/stekjesslide03.jpg',
    'images/slides/stekjesslide01.jpg',
    'images/slides/stekjesslide06.jpg',
    'images/slides/stekjesslide05.jpg',
    'images/slides/stekjesslide07.jpg',
    'images/slides/stekjesslide04.jpg',
    'images/slides/stekjesslide08.jpg',
    'images/slides/stekjesslide09.jpg'
  ]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const previousSlide = () => {
    const resetSlide = currentSlideIndex === 0;
    const index = resetSlide ? slides.length - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(index);
  };

  const nextSlide = () => {
    const resetIndex = currentSlideIndex === slides.length - 1;
    const index = resetIndex ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(index);
  }

  const media = slides.slice(currentSlideIndex, currentSlideIndex + 1);
  const slidesCollection = media.length < 1
    ? [...media, ...slides.slice(0, 1 - media.length)]
    : media;

  return (
    <div className="slider">
      <div className="slider__prev">
        <img src={'images/icons/chevron-left.svg'} alt="Left arrow" onClick={previousSlide} className="slider__icon" />
      </div>
      <div className="slider-content">
        {slidesCollection.map((slide, index) =>
          <img key={index} src={slide} alt="stekjesruilphoto" className="slider-content__media" onClick={nextSlide} />
        )}
      </div>
      <div className="slider__next">
        <img src={'images/icons/chevron-right.svg'} alt="Left arrow" onClick={nextSlide} className="slider__icon" />
      </div>

    </div>
  );
};

export default Slider;
