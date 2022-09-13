import React from "react";

import {
  Container,
  ContainerHeading,
  ContainerContent,
  Achivements,
  BorderWrap,
  TargetWraper,
  AchiveGoal,
  Goals,
  HrBorderWrap,
} from "styles/views/homepage/target";

const Contant = () => (
  <Container>
    <ContainerHeading>
      When you see our numbers, you'll know why we're the best.
      <ContainerContent>
        We're a fastest growing community working hard to make things happen.
        We've got a lot of hands-on cumulative experience and a good amount of
        fire under our tails, though we are young.
      </ContainerContent>
    </ContainerHeading>
    <BorderWrap />
    <TargetWraper>
      <Achivements>
        <AchiveGoal>500k +</AchiveGoal>
        <Goals>Lines of Code</Goals>
      </Achivements>
      <HrBorderWrap />

      <Achivements>
        <AchiveGoal>140 +</AchiveGoal>
        <Goals>Team Members</Goals>
      </Achivements>
      <HrBorderWrap />

      <Achivements>
        <AchiveGoal>65 +</AchiveGoal>
        <Goals>Completed Projects</Goals>
      </Achivements>
    </TargetWraper>
  </Container>
);

export default Contant;
