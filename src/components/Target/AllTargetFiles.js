import React from "react";
import { Main } from "../../styles/TargetStyle";
import Contant from "./Contant";
import TargetSideImage from "./TargetSideImage";
import TransText from "./TransText";

const AllTargetFiles = () => {
  return (
    <Main>
      <TargetSideImage />
      <TransText />
      <Contant />
    </Main>
  );
};

export default AllTargetFiles;
