import React from "react";
import { FooterComponent, Inner } from "styles/components/Footer/index";
import BottomWhite from "components/Footer/bottomWhite";
import LeftFooterContant from "components/Footer/leftFooterContent";
import RightFooter from "components/Footer/rightFooter";

const AllFooterFiles = () => {
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

export default AllFooterFiles;
