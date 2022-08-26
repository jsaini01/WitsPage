import React from "react";
import Headings from "./solutionProb/Headings";
import ProbTable from "./solutionProb/ProbTable";
import { Background } from "../styles/SolutionStyle";

const SolutionsProb = () => {
  return (
    <Background>
      <Headings />
      <ProbTable />
    </Background>
  );
};

export default SolutionsProb;
