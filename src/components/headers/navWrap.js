import React from "react";

import { Navbar, DropDown, DownArrow } from "styles/components/Header/index";

import arrowIcon from "assets/images/arrowIcon.svg";

const NavWrap = () => (
  <Navbar>
    <DropDown>
      About Us
      <DownArrow src={arrowIcon} alt="DownArrow" />
    </DropDown>
    <DropDown>Industry</DropDown>
    <DropDown>
      Services <DownArrow src={arrowIcon} alt="DownArrow" />
    </DropDown>
    <DropDown>Career</DropDown>
  </Navbar>
);

export default NavWrap;
