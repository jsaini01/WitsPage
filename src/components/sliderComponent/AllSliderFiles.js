import React from "react";
import { SlideSite } from "../../styles/SlideStyle";
import SlideContent from "./SlideContent";
import SliderBackImg from "./SliderBackImg";

const AllSliderFiles = () => {
  return (
    <SlideSite>
      <SliderBackImg />
      <SlideContent />
    </SlideSite>
  );
};

export default AllSliderFiles;
