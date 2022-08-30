import React from "react";

import {
  ProfileContent,
  Info,
  Circle,
  Name,
  NameHeadings,
  Destination,
  Stars,
  Fillstart,
  About,
} from "../../styles/SlideStyle";

const Profile = () => {
  return (
    <ProfileContent>
      <Info>
        <Circle src="./images/profile.png" alt="profile" />
        <Name>
          <NameHeadings>Jane Cooper</NameHeadings>
          <Destination>Manager at Google</Destination>
          <Stars>
            <Fillstart src="./images/fillstar.png" alt="fillstar" />
            <Fillstart src="./images/fillstar.png" alt="fillstar" />
            <Fillstart src="./images/fillstar.png" alt="fillstar" />
            <Fillstart src="./images/fillstar.png" alt="fillstar" />
            <Fillstart src="./images/nullstar.png" alt="nullstar" />
          </Stars>
        </Name>
      </Info>
      <About>
        "Thanks guys, keep up the good work! I wish I would have thought of it
        first. It's incredible. I don't always clop, but when I do, it's because
        of Wits Innovation Lab."
      </About>
    </ProfileContent>
  );
};

export default Profile;
