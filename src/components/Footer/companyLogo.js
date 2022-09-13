import React from "react";
import { LogoContainer, Logo } from "styles/components/Footer/index";

import footerLogo from "assets/images/footerLogo.png";

const CompanyLogo = () => (
  <LogoContainer>
    <Logo src={footerLogo} alt="logo" />
  </LogoContainer>
);

export default CompanyLogo;
