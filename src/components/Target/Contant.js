import React from "react";

import {
  TwoSection,
  SmallHeading,
  P,
  NumberTarget,
  Border,
  TargetHeadings,
  HeadingTargets,
  TargetPera,
  HorizontBorder,
} from "../../styles/TargetStyle";

const Contant = () => {
  return (
    <TwoSection>
      <SmallHeading>
        When you see our numbers, you'll know why we're the best.
        <P>
          We're a fastest growing community working hard to make things happen.
          We've got a lot of hands-on cumulative experience and a good amount of
          fire under our tails, though we are young.
        </P>
      </SmallHeading>
      <Border />
      <TargetHeadings>
        <NumberTarget>
          <HeadingTargets>500k +</HeadingTargets>
          <TargetPera>Lines of Code</TargetPera>
        </NumberTarget>
        <HorizontBorder />

        <NumberTarget>
          <HeadingTargets>140 +</HeadingTargets>
          <TargetPera>Team Members</TargetPera>
        </NumberTarget>
        <HorizontBorder />

        <NumberTarget>
          <HeadingTargets>65 +</HeadingTargets>
          <TargetPera>Completed Projects</TargetPera>
        </NumberTarget>
      </TargetHeadings>
    </TwoSection>
  );
};

export default Contant;
