import React from "react";

import {
  Follow,
  FollowUSWraper,
  IconsWrap,
  LinkIcon,
  Content,
  InputWraper,
  Mail,
  Inputmail,
} from "styles/components/Footer/index";
import { SubmitButton } from "components/Buttons";

// import indeed from "assets/images/indeed.svg";
// import facebook from "assets/images/facebook.svg";
// import twiter from "assets/images/twiter.svg";
// import youtube from "assets/images/youtube.svg";
import mail from "assets/images/mail.svg";
import Svgindeed from "assets/svg/indeed";
import SvgFacebook from "assets/svg/facebook";
import Svgyoutube from "assets/svg/youtube";
import SvgTwiter from "assets/svg/twiter";

const FollowUS = () => (
  <FollowUSWraper>
    <Follow>
      Follow Us
      <IconsWrap>
        <Svgindeed color="black" />
        <SvgFacebook />
        <SvgTwiter />
        <Svgyoutube />
      </IconsWrap>
    </Follow>

    <Content>Subscribe to Our Newsletter</Content>

    <InputWraper>
      <Mail src={mail} alt="mail" />
      <Inputmail placeholder="Enter Your Email" type="email" />
      <SubmitButton />
    </InputWraper>
  </FollowUSWraper>
);

export default FollowUS;
