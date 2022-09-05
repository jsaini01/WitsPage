import React from "react";
import { AllFooter, Upper } from "../../styles/FooterStyle";
import Bottom from "./Bottom";
import FooterHeading from "./FooterHeading";
import FooterLogo from "./FooterLogo";

const LeftFooterContant = () => {
  return (
    <AllFooter>
      <Upper>
        <FooterLogo />
        <FooterHeading />
      </Upper>
      <Bottom />
    </AllFooter>
  );
};

export default LeftFooterContant;
