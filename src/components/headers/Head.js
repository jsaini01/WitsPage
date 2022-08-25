import React from "react";

import { Nav, DropDown } from "../../styles/HeaderStyle";
const Head = () => {
  return (
    <Nav>
      <DropDown>
        About Us<i className="fa-solid fa-angle-down"></i>
      </DropDown>
      <DropDown>Industry</DropDown>
      <DropDown>
        Services<i className="fa-solid fa-angle-down"></i>
      </DropDown>
      <DropDown>Career</DropDown>
    </Nav>
  );
};

export default Head;
