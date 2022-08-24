import React from "react";

import { Nav } from "../../styles/HeaderStyle";
const Head = () => {
  return (
    <Nav>
      <p>
        About Us<i className="fa-solid fa-angle-down"></i>
      </p>
      <p>Industry</p>
      <p>
        Services<i className="fa-solid fa-angle-down"></i>
      </p>
      <p>Career</p>
    </Nav>
  );
};

export default Head;
