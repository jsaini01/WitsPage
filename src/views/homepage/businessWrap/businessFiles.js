import React from "react";
import { MainWraper } from "styles/views/homepage/business";
import BusinessBackImg from "views/homepage/businessWrap/businessBackImg";
import BusinessContant from "views/homepage/businessWrap/businessContact";

const BusinessFiles = () => {
  return (
    <MainWraper>
      <BusinessContant />
      <BusinessBackImg />
    </MainWraper>
  );
};

export default BusinessFiles;
