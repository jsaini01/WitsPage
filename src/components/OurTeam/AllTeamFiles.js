import React from "react";
import { OurTeamsDiv } from "../../styles/OurTeamStyle";
import AllImgs from "./AllImgs";
import TeamHeadings from "./TeamHeadings";

const AllTeamFiles = () => {
  return (
    <OurTeamsDiv>
      <TeamHeadings />
      <AllImgs />
    </OurTeamsDiv>
  );
};

export default AllTeamFiles;
