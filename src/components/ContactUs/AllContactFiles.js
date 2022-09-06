import React from "react";
import { ContanctUs } from "../../styles/ContactUsStyled";
import ContactPart from "./ContactPart";
import Headings from "./Headings";

const AllContactFiles = () => {
  return (
    <ContanctUs>
      <Headings />
      <ContactPart />
    </ContanctUs>
  );
};

export default AllContactFiles;
