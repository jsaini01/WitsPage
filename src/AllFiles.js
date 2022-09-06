import React from "react";
import AllContactFiles from "./components/ContactUs/AllContactFiles";
import AllFooterFiles from "./components/Footer/AllFooterFiles";
import AllHeader from "./components/headers/AllHeader";
import OurBlogFiles from "./components/ourblog/OurBlogFiles";
import AllClientFiles from "./components/OurClint/AllClientFiles";
import AllTeamFiles from "./components/OurTeam/AllTeamFiles";
import SecondAllFiles from "./components/SecondSectiion/SecondAllFiles";
import AllSliderFiles from "./components/sliderComponent/AllSliderFiles";
import AllSolutionFiles from "./components/solutionProb/AllSolutionFiles";
import AllTargetFiles from "./components/Target/AllTargetFiles";

const AllFiles = () => {
  return (
    <>
      <AllHeader />
      <SecondAllFiles />
      <AllTargetFiles />
      <AllSolutionFiles />
      <AllClientFiles />
      <AllSliderFiles />
      <OurBlogFiles />
      <AllTeamFiles />
      <AllContactFiles />
      <AllFooterFiles />
    </>
  );
};

export default AllFiles;
