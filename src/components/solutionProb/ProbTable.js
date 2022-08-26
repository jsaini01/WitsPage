import React from "react";
import InnerTable from "./InnerTable";

import {
  Table,
  THead,
  HalfBorder,
  BorderText,
} from "../../styles/SolutionStyle";

const ProbTable = () => {
  return (
    <Table>
      <THead>What are you looking for?</THead>
      <HalfBorder></HalfBorder>
      <BorderText>Question 1 of 2</BorderText>
      <InnerTable />
    </Table>
  );
};

export default ProbTable;
