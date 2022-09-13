import React from "react";
import { OurTeamWraper } from "styles/views/homepage/ourTeam";
import Images from "views/homepage/ourTeam/images";
import OurTeamContent from "views/homepage/ourTeam/ourTeamContent";

const OurTeam = () => (
  <OurTeamWraper>
    <OurTeamContent />
    <Images />
  </OurTeamWraper>
);

export default OurTeam;
