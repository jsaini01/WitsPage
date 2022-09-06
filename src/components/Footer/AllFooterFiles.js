import React from "react";
import { FooterComponent, Inner } from "../../styles/FooterStyle";
import BottomWhite from "./BottomWhite";
import LeftFooterContant from "./LeftFooterContant";
import RightFooter from "./RightFooter";

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
