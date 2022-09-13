import React from "react";
import {
  ContantWraper,
  ConatantHeading,
  Conatant,
  ContantPeragraph,
  Span,
} from "styles/views/homepage/client";

const ClientContant = () => (
  <ContantWraper>
    <Conatant>See who's winning with us</Conatant>
    <ConatantHeading>Our Clients</ConatantHeading>
    <ContantPeragraph>
      These powerhouses are already winning business with us.
      <Span>We love what we do, and we hope you'll let us help you too.</Span>
    </ContantPeragraph>
  </ContantWraper>
);

export default ClientContant;
