import React from "react";
import {
  SlideWraper,
  Contant,
  Heading,
  SubHeading,
  WrapContant,
  Wrap,
  ArrowIcon,
  RightArrow,
  LeftArrow,
} from "styles/views/homepage/slider";
import Profile from "views/homepage/sliderWrap/profile";

import rightsymbol from "assets/images/rightarrow.png";
import leftsymbol from "assets/images/leftarrow.png";

const SlideContent = () => (
  <SlideWraper>
    <Contant>See our success in</Contant>
    <Heading>Testimonials</Heading>
    <Wrap>
      <SubHeading>
        We are the best, and our customers say it.
        <WrapContant>
          We've never been ones to brag, but we can't help but share some of the
          feedback we've gotten from our clients. Take a look at what they have
          to say about us:
        </WrapContant>
      </SubHeading>

      <ArrowIcon>
        <RightArrow src={leftsymbol} alt="arrow" />
        <LeftArrow src={rightsymbol} alt="arrow" />
      </ArrowIcon>
    </Wrap>
    <Profile />
  </SlideWraper>
);

export default SlideContent;
