import React from "react";
import { Div } from "../../styles/HeaderStyle";
import { Button } from "./Button";
import Head from "./Head";
import Logo from "./Logo";

const AllHeader = () => {
  return (
    <Div>
      <Logo />
      <Head />
      <Button />
    </Div>
  );
};

export default AllHeader;
