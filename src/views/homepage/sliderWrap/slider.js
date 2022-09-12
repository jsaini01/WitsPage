import React from "react";
import { SlideContainer } from "styles/views/homepage/slider";
import SlideContent from "views/homepage/sliderWrap/slideContent";
import SliderImage from "views/homepage/sliderWrap/sliderImage";

const Slider = () => {
  return (
    <SlideContainer>
      <SliderImage />
      <SlideContent />
    </SlideContainer>
  );
};

export default Slider;
