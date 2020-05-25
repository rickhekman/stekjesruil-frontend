import React, { useState } from 'react';
import LeftArrow from '../../img/icons/chevron-left.svg';
import RightArrow from '../../img/icons/chevron-right.svg';

function Slider() {

  const [slides] = useState([
    require('../../img/slides/low/stekjesruilslide-low-02.jpg'),
    require('../../img/slides/low/stekjesruilslide-low-03.jpg'),
    require('../../img/slides/low/stekjesruilslide-low-01.jpg'),
    require('../../img/slides/low/stekjesruilslide-low-06.jpg'),
    require('../../img/slides/low/stekjesruilslide-low-05.jpg'),
    require('../../img/slides/low/stekjesruilslide-low-07.jpg'),
    require('../../img/slides/low/stekjesruilslide-low-04.jpg'),
    require('../../img/slides/low/stekjesruilslide-low-08.jpg'),
    require('../../img/slides/low/stekjesruilslide-low-09.jpg'),
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
      <div className="slider--prev">
        <img src={LeftArrow} alt="Left arrow" onClick={previousSlide} className="slider--icon" />
      </div>
      <div className="slider--content">
        {slidesCollection.map((image, index) =>
          <img key={index} src={image} alt="stekjesruilphoto" className="slider--content__media" />
        )}
      </div>
      <div className="slider--next">
        <img src={RightArrow} alt="Left arrow" onClick={nextSlide} className="slider--icon" />
      </div>

    </div>
  );
};

export default Slider;
