import React from "react";
import { Right } from "../../styles/SecondPartStyle";
import { SecButton } from "../headers/Button";
import Icons from "./Icons";

const RightText = () => {
  return (
    <Right>
      <h1>
        We're not just IT.
        <br /> We're a
        <span>
          Business
          <br /> Transformation
          <br /> Company.
        </span>
      </h1>

      <p>
        We are more than just a business. We're a community of
        <br /> like-minded individuals who share our love for
        <br /> connecting people with the best in their area.
      </p>
      <SecButton />
      <Icons />
    </Right>
  );
};

export default RightText;
