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
} from "styles/components/Footer/index";
import { SubmitBtn } from "components/Buttons";

import indeed from "assets/images/indeed.svg";
import facebook from "assets/images/facebook.svg";
import twiter from "assets/images/twiter.svg";
import youtube from "assets/images/youtube.svg";
import mail from "assets/images/mail.svg";

const RightFooter = () => {
  return (
    <RighterDiv>
      <FollowHeading>
        Follow Us
        <Icons>
          <Indeed src={indeed} alt="indeed" />
          <Facebook src={facebook} alt="facebook" />
          <Twiter src={twiter} alt="twiter" />
          <Youtube src={youtube} alt="youtube" />
        </Icons>
      </FollowHeading>

      <CenterHeading>Subscribe to Our Newsletter</CenterHeading>

      <InputBody>
        <Mail src={mail} alt="mail" />
        <Inputmail placeholder="Enter Your Email" type="email" />
        <SubmitBtn />
      </InputBody>
    </RighterDiv>
  );
};

export default RightFooter;
