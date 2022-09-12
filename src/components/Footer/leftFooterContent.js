import React from "react";
import { AllFooter, Upper } from "styles/components/Footer/index";
import Bottom from "components/Footer/bottom";
import FooterHeading from "components/Footer/footerHeading";
import FooterLogo from "components/Footer/footerLogo";

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
