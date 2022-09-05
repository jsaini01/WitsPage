import React from "react";
import { Send, Whatsapp, Whatsimg, Text } from "../../styles/ContactUsStyled";
import { Submit } from "../../styles/FooterStyle";
import { Btn, LetsConnect } from "../../styles/HeaderStyle";
import {
  SecBtn,
  RightButton,
  LeftButton,
  SecBtnArrow,
} from "../../styles/SecondPartStyle";
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
        <SecBtnArrow src="./images/secBtnArrow.svg" alt="Arrow" />
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

export const SendButton = () => {
  return <Send>Send Request</Send>;
};

export const WhatsappBtn = () => {
  return (
    <Whatsapp>
      <Whatsimg src="./images/whatsapp.svg" alt="whatsapp" />
      <Text>Whatsapp</Text>
    </Whatsapp>
  );
};

export const CandyBtn = () => {
  return (
    <Whatsapp>
      <Whatsimg src="./images/candy.svg" alt="whatsapp" />
      <Text>Calendly</Text>
    </Whatsapp>
  );
};

export const SubmitBtn = () => {
  return <Submit>Subscribe</Submit>;
};
