import React from "react";
import {
  ContactComp,
  TextSide,
  BgImages,
  ImageText,
} from "../../styles/ContactUsStyled";
import Form from "./Form";

const ContactPart = () => {
  return (
    <ContactComp>
      <TextSide>
        <BgImages src="./images/mask-group.png" alt="mask" />
        <ImageText>Have a Project? We would love to help</ImageText>
      </TextSide>

      <Form />
    </ContactComp>
  );
};

export default ContactPart;
