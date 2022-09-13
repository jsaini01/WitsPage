import React from "react";
import { FooterWraper, Container } from "styles/components/Footer/index";
import CopyrightWrap from "components/Footer/copyrightWrap";
import FooterInfo from "components/Footer/footerInfo";
import FollowUS from "components/Footer/followUS";

const AllFooterFiles = () => (
  <FooterWraper>
    <Container>
      <FooterInfo />
      <FollowUS />
    </Container>
    <CopyrightWrap />
  </FooterWraper>
);

export default AllFooterFiles;
