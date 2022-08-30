import React from "react";
import {
  Header,
  HeaderHead,
  HeaderHeading,
  MainHeading,
  SpanPera,
  Div,
  ArrowImg,
  RightArrow,
  LeftArrow,
} from "../../styles/SlideStyle";
import Profile from "./Profile";

const SlideContent = () => {
  return (
    <Header>
      <HeaderHead>See our success in</HeaderHead>
      <HeaderHeading>Testimonials</HeaderHeading>
      <Div>
        <MainHeading>
          We are the best, and our customers say it.
          <SpanPera>
            We've never been ones to brag, but we can't help but share some of
            the feedback we've gotten from our clients. Take a look at what they
            have to say about us:
          </SpanPera>
        </MainHeading>

        <ArrowImg>
          <RightArrow src="./images/leftarrow.png" alt="arrow" />
          <LeftArrow src="./images/rightarrow.png" alt="arrow" />
        </ArrowImg>
      </Div>
      <Profile />
    </Header>
  );
};

export default SlideContent;
