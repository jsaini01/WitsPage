import React from "react";
import { InfoWraper, LogoWrap } from "styles/components/Footer/index";
import AboutusContent from "components/Footer/aboutusContent";
import CompanyContent from "components/Footer/companyContent";
import CompanyLogo from "components/Footer/companyLogo";

const FooterInfo = () => (
  <InfoWraper>
    <LogoWrap>
      <CompanyLogo />
      <CompanyContent />
    </LogoWrap>
    <AboutusContent />
  </InfoWraper>
);

export default FooterInfo;
