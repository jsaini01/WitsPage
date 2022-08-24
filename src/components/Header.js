import React from "react";
import Logo from "./headers/Logo";
import Head from "./headers/Head";
import { Button } from "./headers/Button";

import { Div } from "../styles/HeaderStyle";

const Header = () => {
  return (
    <Div>
      <Logo />
      <Head />
      <Button />
    </Div>
  );
};

export default Header;
