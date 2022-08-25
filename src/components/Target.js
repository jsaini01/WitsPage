import React from "react";
import { Main } from "../styles/TargetStyle";
import Contant from "./Target/Contant";
import TargetSideImage from "./Target/TargetSideImage";
import TransText from "./Target/TransText";

const Target = () => {
  return (
    <Main>
      <TargetSideImage />
      <TransText />
      <Contant />
    </Main>
  );
};

export default Target;
