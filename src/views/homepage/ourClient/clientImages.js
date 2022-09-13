import React from "react";
import {
  ImgContainer,
  HerbalLife,
  ImageWraper,
  ImageContainer,
  Earn,
  Trepp,
  Farms,
  Affinidi,
  Bcg,
  Hermes,
  Designwork,
  Moonverse,
  Payu,
} from "styles/views/homepage/client";

import nutrition from "assets/images/nutrition.png";
import trepp from "assets/images/trepp.png";
import farms from "assets/images/farms.png";
import affinidi from "assets/images/affinidi.png";
import bcg from "assets/images/bcg.png";
import earn from "assets/images/earn.png";
import hermes from "assets/images/hermes.png";
import designwork from "assets/images/designwork.png";
import moonverse from "assets/images/moonverse.png";
import payu from "assets/images/payu.png";

const ClintImages = () => (
  <ImageWraper>
    <ImgContainer>
      <HerbalLife src={nutrition} alt="nutri" />
      <Trepp src={trepp} alt="nutri" />
      <Farms src={farms} alt="nutri" />
      <Affinidi src={affinidi} alt="nutri" />
      <Bcg src={bcg} alt="nutri" />
    </ImgContainer>
    <ImageContainer>
      <Earn src={earn} alt="nutri" />
      <Hermes src={hermes} alt="nutri" />
      <Designwork src={designwork} alt="nutri" />
      <Moonverse src={moonverse} alt="nutri" />
      <Payu src={payu} alt="nutri" />
    </ImageContainer>
  </ImageWraper>
);

export default ClintImages;
