import React from "react";
import {
  Send,
  ButtonWraper,
  ButtonImg,
  ButtonContent,
} from "styles/views/homepage/contactUs";

import { Submit } from "styles/components/Footer/index";
import { Connectbutton, LetsConnect } from "styles/components/Header/index";
import {
  ButtonWrap,
  TellUsButton,
  ArrowButton,
  ArrowImg,
} from "styles/views/homepage/business";

import { Arrow } from "styles/views/homepage/solutuion";

import secBtnArrow from "assets/images/secBtnArrow.svg";
import whatsapp from "assets/images/whatsapp.svg";
import candy from "assets/images/candy.svg";

export const Button = () => (
  <Connectbutton>
    <LetsConnect type="button">Let's Connect</LetsConnect>
  </Connectbutton>
);

export const TellUS = () => (
  <ButtonWrap>
    <TellUsButton>Tell Us About your Project</TellUsButton>
    <ArrowButton>
      <ArrowImg src={secBtnArrow} alt="Arrow" />
    </ArrowButton>
  </ButtonWrap>
);

export const ColumnArrow = () => (
  <Arrow>
    <i class="fa-solid fa-chevron-right"></i>
  </Arrow>
);

export const SendButton = () => <Send>Send Request</Send>;

export const WhatsappBtn = () => (
  <ButtonWraper>
    <ButtonImg src={whatsapp} alt="whatsapp" />
    <ButtonContent>Whatsapp</ButtonContent>
  </ButtonWraper>
);

export const CandyBtn = () => (
  <ButtonWraper>
    <ButtonImg src={candy} alt="whatsapp" />
    <ButtonContent>Calendly</ButtonContent>
  </ButtonWraper>
);

export const SubmitButton = () => <Submit>Subscribe</Submit>;
