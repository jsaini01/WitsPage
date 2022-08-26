import React from "react";
import { Btn, LetsConnect } from "../../styles/HeaderStyle";
import { SecBtn, RightButton, LeftButton } from "../../styles/SecondPartStyle";
import { BigB } from "../../styles/SolutionStyle";

export const Button = () => {
  return (
    <Btn>
      <LetsConnect type="button">Let's Connect</LetsConnect>
    </Btn>
  );
};

export const SecButton = () => {
  return (
    <SecBtn>
      <RightButton>Tell Us About your Project</RightButton>
      <LeftButton>
        <i className="fa-solid fa-chevron-right"></i>
      </LeftButton>
    </SecBtn>
  );
};

export const BigButton = () => {
  return (
    <BigB>
      <i class="fa-solid fa-chevron-right"></i>
    </BigB>
  );
};
