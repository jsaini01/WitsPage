import React from "react";
import {
  ContactFormWraper,
  MainContent,
  Select,
  Option,
  Input,
  AttachmentWrap,
  Attachment,
  AttachmentContent,
  Optional,
  BorderLeft,
  BorderRight,
  BorderLineContent,
  BorderLineWrap,
  HelpContent,
  LinkButtonWraper,
} from "styles/views/homepage/contactUs";
import { CandyBtn, SendButton, WhatsappBtn } from "components/Buttons";

import attachment from "assets/images/icon.svg";

const ContactForm = () => (
  <ContactFormWraper>
    <MainContent>I’m interested in....</MainContent>
    <Select>
      <Option>All Services</Option>
    </Select>
    <Input placeholder="Your name" type="text" />
    <Input placeholder="Your email" type="email" />
    <Input placeholder="Tell us about your project" type="text" />
    <AttachmentWrap>
      <Attachment src={attachment} alt="attachmenticon" />

      <AttachmentContent>Add Attachment</AttachmentContent>
      <Optional>(Optional)</Optional>
    </AttachmentWrap>
    <SendButton />
    <BorderLineWrap>
      <BorderLeft />
      <BorderLineContent>or</BorderLineContent>
      <BorderRight />
    </BorderLineWrap>

    <HelpContent>
      If you're ready to make a change, we're ready to help. Just connect with
      us today!
    </HelpContent>
    <LinkButtonWraper>
      <WhatsappBtn />
      <CandyBtn />
    </LinkButtonWraper>
  </ContactFormWraper>
);

export default ContactForm;
