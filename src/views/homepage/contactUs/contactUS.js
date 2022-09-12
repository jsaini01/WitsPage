import React from "react";
import { ContanctUsWraper } from "styles/views/homepage/contactUs";
import Content from "views/homepage/contactUs/content";
import Headings from "views/homepage/contactUs/headings";

const ContactUS = () => {
  return (
    <ContanctUsWraper>
      <Headings />
      <Content />
    </ContanctUsWraper>
  );
};

export default ContactUS;
