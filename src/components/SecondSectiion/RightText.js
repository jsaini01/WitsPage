import React from "react";
import { Right, Span, Heading, Pera } from "../../styles/SecondPartStyle";
import { SecButton } from "../headers/Button";
import Icons from "./Icons";

const RightText = () => {
  return (
    <Right>
      <Heading>
        We're not just IT. We're a<Span>Business Transformation Company.</Span>
      </Heading>

      <Pera>
        We are more than just a business. We're a community of like-minded
        individuals who share our love for connecting people with the best in
        their area.
      </Pera>
      <SecButton />
      <Icons />
    </Right>
  );
};

export default RightText;
