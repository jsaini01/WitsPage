import React from "react";

import {
  AllHeading,
  ContactSmallHead,
  ContactMainHead,
  Border,
  ContactPera,
} from "../../styles/ContactUsStyled";

const Headings = () => {
  return (
    <AllHeading>
      <ContactSmallHead>Got an idea?</ContactSmallHead>
      <ContactMainHead>Contact Us</ContactMainHead>
      <Border></Border>
      <ContactPera>You have questions. We have answers.</ContactPera>
    </AllHeading>
  );
};

export default Headings;
