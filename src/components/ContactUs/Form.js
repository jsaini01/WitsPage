import React from "react";
import {
  ContactForm,
  SelectHeading,
  Select,
  Option,
  Input,
  Attachment,
  Svg,
  AttachmentPera,
  Optional,
  LeftBorder,
  RightBorder,
  Or,
  Line,
  LastFormPera,
  TwoBtn,
} from "../../styles/ContactUsStyled";
import { CandyBtn, SendButton, WhatsappBtn } from "../headers/Button";

const Form = () => {
  return (
    <ContactForm>
      <SelectHeading>I’m interested in....</SelectHeading>
      <Select>
        <Option>All Services</Option>
      </Select>
      <Input placeholder="Your name" />
      <Input placeholder="Your email" />
      <Input placeholder="Tell us about your project" />
      <Attachment>
        <Svg src="./images/icon.svg" alt="attachmenticon" />

        <AttachmentPera>Add Attachment</AttachmentPera>
        <Optional>(Optional)</Optional>
      </Attachment>
      <SendButton />
      <Line>
        <LeftBorder />
        <Or>or</Or>
        <RightBorder />
      </Line>

      <LastFormPera>
        If you're ready to make a change, we're ready to help. Just connect with
        us today!
      </LastFormPera>
      <TwoBtn>
        <WhatsappBtn />
        <CandyBtn />
      </TwoBtn>
    </ContactForm>
  );
};

export default Form;
