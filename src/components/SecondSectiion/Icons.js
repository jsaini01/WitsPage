import React from "react";

import { Icon, FollowUS, Line, Indeed } from "../../styles/SecondPartStyle";

const Icons = () => {
  return (
    <Icon>
      <FollowUS>Follow US</FollowUS>
      <Line></Line>
      <Indeed src="./images/indeedsec.svg" alt="indeed" />
      <Indeed src="./images/facebooksec.svg" alt="facebook" />
      <Indeed src="./images/twitersec.svg" alt="twiter" />
      <Indeed src="./images/youtubesec.svg" alt="youtube" />
    </Icon>
  );
};

export default Icons;
