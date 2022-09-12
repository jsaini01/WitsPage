import React from "react";
import {
  Copyright,
  ImportantPera,
  Legal,
  Policy,
  TermCondition,
  WhiteDiv,
} from "styles/components/Footer/index";

const BottomWhite = () => {
  return (
    <WhiteDiv>
      <ImportantPera>
        <TermCondition> Terms & Conditions</TermCondition>
        <Policy>Privacy Policy</Policy>
        <Legal> Legal</Legal>
      </ImportantPera>
      <Copyright>
        Copyright © 2020. witsinnovationlab. All rights reserved.
      </Copyright>
    </WhiteDiv>
  );
};

export default BottomWhite;
