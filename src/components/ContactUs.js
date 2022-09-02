import React from "react";
import { ContanctUs } from "../styles/ContactUsStyled";
import ContactPart from "./ContactUs/ContactPart";

import Headings from "./ContactUs/Headings";

const ContactUs = () => {
  return (
    <ContanctUs>
      <Headings />
      <ContactPart />
    </ContanctUs>
  );
};

export default ContactUs;
