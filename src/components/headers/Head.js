import React from "react";

import { Nav, DropDown, ArrowIcon } from "../../styles/HeaderStyle";
const Head = () => {
  return (
    <Nav>
      <DropDown>
        About Us
        <ArrowIcon src="./images/ArrowIcon.svg" alt="DownArrow" />
      </DropDown>
      <DropDown>Industry</DropDown>
      <DropDown>
        Services <ArrowIcon src="./images/ArrowIcon.svg" alt="DownArrow" />
      </DropDown>
      <DropDown>Career</DropDown>
    </Nav>
  );
};

export default Head;
