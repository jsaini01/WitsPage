import React from "react";
import {
  Wraper,
  Span,
  BusinessHeading,
  BusinessContent,
} from "styles/views/homepage/business";
import { TellUS } from "components/Buttons";
import Icons from "views/homepage/businessWrap/icons";

const BusinessContant = () => {
  return (
    <Wraper>
      <BusinessHeading>
        We're not just IT. We're a<Span>Business Transformation Company.</Span>
      </BusinessHeading>

      <BusinessContent>
        We are more than just a business. We're a community of like-minded
        individuals who share our love for connecting people with the best in
        their area.
      </BusinessContent>
      <TellUS />
      <Icons />
    </Wraper>
  );
};

export default BusinessContant;
