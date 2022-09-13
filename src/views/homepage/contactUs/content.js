import React from "react";
import {
  ContactWrap,
  BackImgWraper,
  Backimg,
  BackContent,
} from "styles/views/homepage/contactUs";

import maskGroup from "assets/images/mask-group.png";
import ContactForm from "views/homepage/contactUs/contactForm";

const Content = () => (
  <ContactWrap>
    <BackImgWraper>
      <Backimg src={maskGroup} alt="mask" />
      <BackContent>Have a Project? We would love to help</BackContent>
    </BackImgWraper>

    <ContactForm />
  </ContactWrap>
);

export default Content;
