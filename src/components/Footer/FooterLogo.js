import React from "react";
import { FooterImg, Img } from "styles/components/Footer/index";

import footerLogo from "assets/images/footerLogo.png";

const FooterLogo = () => {
  return (
    <FooterImg>
      <Img src={footerLogo} alt="logo" />
    </FooterImg>
  );
};

export default FooterLogo;
