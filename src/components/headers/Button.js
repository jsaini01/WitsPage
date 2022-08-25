import React from "react";
import { Btn, LetsConnect } from "../../styles/HeaderStyle";
import { SecBtn, RightButton, LeftButton } from "../../styles/SecondPartStyle";

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
