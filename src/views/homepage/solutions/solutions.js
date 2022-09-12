import React from "react";
import { SolutionContainer } from "styles/views/homepage/solutuion";
import HeadingWrap from "views/homepage/solutions/headingWrap";
import SolutionTable from "views/homepage/solutions/solutionTable";

const Solutions = () => {
  return (
    <SolutionContainer>
      <HeadingWrap />
      <SolutionTable />
    </SolutionContainer>
  );
};

export default Solutions;
