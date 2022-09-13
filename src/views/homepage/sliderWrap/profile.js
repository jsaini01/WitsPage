import React from "react";

import {
  ProfileWraper,
  ProfileContant,
  ProfileImage,
  PersonInformation,
  PersonName,
  Destination,
  ImgWrap,
  WrapImg,
  PersonAbout,
  ProfileBackImage,
} from "styles/views/homepage/slider";

import slideupimg from "assets/images/comas.png";
import profile from "assets/images/profile.png";
import fillstar from "assets/images/fillstar.png";
import nullstar from "assets/images/nullstar.png";

const Profile = () => (
  <ProfileWraper>
    <ProfileBackImage src={slideupimg} alt="comas" />
    <ProfileContant>
      <ProfileImage src={profile} alt="profile" />
      <PersonInformation>
        <PersonName>Jane Cooper</PersonName>
        <Destination>Manager at Google</Destination>
        <ImgWrap>
          <WrapImg src={fillstar} alt="fillstar" />
          <WrapImg src={fillstar} alt="fillstar" />
          <WrapImg src={fillstar} alt="fillstar" />
          <WrapImg src={fillstar} alt="fillstar" />
          <WrapImg src={nullstar} alt="nullstar" />
        </ImgWrap>
      </PersonInformation>
    </ProfileContant>
    <PersonAbout>
      "Thanks guys, keep up the good work! I wish I would have thought of it
      first. It's incredible. I don't always clop, but when I do, it's because
      of Wits Innovation Lab."
    </PersonAbout>
  </ProfileWraper>
);

export default Profile;
