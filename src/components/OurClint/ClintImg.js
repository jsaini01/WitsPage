import React from "react";
import {
  FirstImgs,
  HerbalLife,
  ImgDiv,
  SecondImgs,
  Earn,
  Trepp,
  Farms,
  Affinidi,
  Bcg,
  Hermes,
  Designwork,
  Moonverse,
  Payu,
} from "../../styles/ClientStyle";

const ClintImg = () => {
  return (
    <ImgDiv>
      <FirstImgs>
        <HerbalLife src="./images/nutrition.png" alt="nutri" />
        <Trepp src="./images/trepp.png" alt="nutri" />
        <Farms src="./images/farms.png" alt="nutri" />
        <Affinidi src="./images/affinidi.png" alt="nutri" />
        <Bcg src="./images/bcg.png" alt="nutri" />
      </FirstImgs>
      <SecondImgs>
        <Earn src="./images/earn.png" alt="nutri" />
        <Hermes src="./images/hermes.png" alt="nutri" />
        <Designwork src="./images/designwork.png" alt="nutri" />
        <Moonverse src="./images/moonverse.png" alt="nutri" />
        <Payu src="./images/payu.png" alt="nutri" />
      </SecondImgs>
    </ImgDiv>
  );
};

export default ClintImg;
