import React from "react";

import {
  HeadingWraper,
  IdeaContent,
  MainHeading,
  BorderWrap,
  Content,
} from "styles/views/homepage/contactUs";

const Headings = () => {
  return (
    <HeadingWraper>
      <IdeaContent>Got an idea?</IdeaContent>
      <MainHeading>Contact Us</MainHeading>
      <BorderWrap></BorderWrap>
      <Content>You have questions. We have answers.</Content>
    </HeadingWraper>
  );
};

export default Headings;
