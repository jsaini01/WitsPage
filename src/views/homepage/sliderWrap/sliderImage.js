import React from "react";
import { BackimageWraper, BackImg } from "styles/views/homepage/slider";

import backsliderimg from "assets/images/sliderSideImg.png";

const SliderImage = () => {
  return (
    <BackimageWraper>
      <BackImg src={backsliderimg} alt="sideimg" />
    </BackimageWraper>
  );
};

export default SliderImage;
