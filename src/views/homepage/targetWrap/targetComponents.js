import React from "react";
import { TargetContainer } from "styles/views/homepage/target";
import Contant from "views/homepage/targetWrap/contant";
import TargetBackImg from "views/homepage/targetWrap/targetBackImg";
import OurNumbers from "views/homepage/targetWrap/ourNumbers";

const TargetComponents = () => (
  <TargetContainer>
    <TargetBackImg />
    <OurNumbers />
    <Contant />
  </TargetContainer>
);

export default TargetComponents;
