import React from "react";
import { FooterComponent, Inner } from "../styles/FooterStyle";
import BottomWhite from "./Footer/BottomWhite";
import LeftFooterContant from "./Footer/LeftFooterContant";
import RightFooter from "./Footer/RightFooter";

const Footer = () => {
  return (
    <FooterComponent>
      <Inner>
        <LeftFooterContant />
        <RightFooter />
      </Inner>
      <BottomWhite />
    </FooterComponent>
  );
};

export default Footer;
