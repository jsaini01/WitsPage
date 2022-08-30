import React from "react";
import { SlideSite } from "../styles/SlideStyle";
import SlideContent from "./sliderComponent/SlideContent";
import SliderBackImg from "./sliderComponent/SliderBackImg";

const Slider = () => {
  return (
    <SlideSite>
      <SliderBackImg />
      <SlideContent />
    </SlideSite>
  );
};

export default Slider;
