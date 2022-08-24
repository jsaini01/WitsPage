import React from "react";
import { Btn } from "../../styles/HeaderStyle";
import { SecBtn } from "../../styles/SecondPartStyle";

export const Button = () => {
  return (
    <Btn>
      <button type="button">Let's Connect</button>
    </Btn>
  );
};

export const SecButton = () => {
  return (
    <SecBtn>
      <button type="button" className="first">
        Tell Us About your Project
      </button>
      <button type="button" className="second">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </SecBtn>
  );
};
