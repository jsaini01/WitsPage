import React from "react";
import AllImgs from "./OurTeam/AllImgs";
import { OurTeamsDiv } from "../styles/OurTeamStyle";
import TeamHeadings from "./OurTeam/TeamHeadings";

const OurTeam = () => {
  return (
    <OurTeamsDiv>
      <TeamHeadings />
      <AllImgs />
    </OurTeamsDiv>
  );
};

export default OurTeam;
