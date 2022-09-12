import React from "react";
import { BackImgContainer, BackImg } from "styles/views/homepage/business";

import group from "assets/images/Group.png";

const BusinessBackImg = () => {
  return (
    <BackImgContainer>
      <BackImg src={group} alt="UperSideImg" />
    </BackImgContainer>
  );
};

export default BusinessBackImg;
