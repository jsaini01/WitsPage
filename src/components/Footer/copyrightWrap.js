import React from "react";
import {
  WraperList,
  LegalContent,
  Wraper,
} from "styles/components/Footer/index";

const CopyrightWrap = () => (
  <Wraper>
    <WraperList>
      <LegalContent> Terms & Conditions</LegalContent>
      <LegalContent>Privacy Policy</LegalContent>
      <LegalContent> Legal</LegalContent>
    </WraperList>
    <LegalContent>
      Copyright © 2020. witsinnovationlab. All rights reserved.
    </LegalContent>
  </Wraper>
);

export default CopyrightWrap;
