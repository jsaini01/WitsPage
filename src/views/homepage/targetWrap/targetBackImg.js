import React from "react";

import { BackImgWraper, BackImg } from "styles/views/homepage/target";

import backtargetimg from "assets/images/targetimg.png";

const TargetBackImg = () => (
  <BackImgWraper>
    <BackImg src={backtargetimg} alt="TargetImg" />
  </BackImgWraper>
);

export default TargetBackImg;
