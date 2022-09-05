import React from "react";

import {
  FollowHeading,
  RighterDiv,
  Icons,
  Indeed,
  Facebook,
  Twiter,
  Youtube,
  CenterHeading,
  InputBody,
  Mail,
  Inputmail,
} from "../../styles/FooterStyle";
import { SubmitBtn } from "../headers/Button";

const RightFooter = () => {
  return (
    <RighterDiv>
      <FollowHeading>
        Follow Us
        <Icons>
          <Indeed src="./images/indeed.svg" alt="indeed" />
          <Facebook src="./images/facebook.svg" alt="facebook" />
          <Twiter src="./images/twiter.svg" alt="twiter" />
          <Youtube src="./images/youtube.svg" alt="youtube" />
        </Icons>
      </FollowHeading>

      <CenterHeading>Subscribe to Our Newsletter</CenterHeading>

      <InputBody>
        <Mail src="./images/mail.svg" alt="mail" />
        <Inputmail placeholder="Enter Your Email" type="email" />
        <SubmitBtn />
      </InputBody>
    </RighterDiv>
  );
};

export default RightFooter;
