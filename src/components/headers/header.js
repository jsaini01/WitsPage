import React from "react";
import { HeaderWraper } from "styles/components/Header";
import { Button } from "components/Buttons";
import NavWrap from "components/Headers/navWrap";
import Logo from "components/Headers/logo";

const AllHeader = () => (
  <HeaderWraper>
    <Logo />
    <NavWrap />
    <Button />
  </HeaderWraper>
);

export default AllHeader;
