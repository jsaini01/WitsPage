import React from "react";
import Table from "views/homepage/solutions/table";

import {
  TableContainer,
  TableHeading,
  TableBorder,
  QuestionPart,
} from "styles/views/homepage/solutuion";

const SolutionTable = () => (
  <TableContainer>
    <TableHeading>What are you looking for?</TableHeading>
    <TableBorder></TableBorder>
    <QuestionPart>Question 1 of 2</QuestionPart>
    <Table />
  </TableContainer>
);

export default SolutionTable;
