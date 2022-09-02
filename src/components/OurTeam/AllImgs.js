import React from "react";
import {
  AllImages,
  BackImg,
  Animator,
  Ellipse,
  JuliaCenter,
  Employee200,
  Ellipse1934,
  Ellipse1935,
  UxDesign,
  Ellipse1940,
  Ellipse1939,
  Ellipse1938,
  Ellipse1936,
  InerAnimator,
  InerUx,
  SpanUx,
  Devloper,
  InerDevloper,
  InerEmploye,
  SpanEmploye,
  Founder,
  InerFounder,
  SpanFounder,
  NameJulia,
  PJulia,
  PpJulia,
} from "../../styles/OurTeamStyle";

const AllImgs = () => {
  return (
    <AllImages>
      <BackImg src="./images/backimg.png" alt="backimg" />
      <JuliaCenter src="./images/julia-center-with.png" alt="julia" />
      <NameJulia>Julia Carter</NameJulia>
      <PJulia>Sr. Developer</PJulia>
      <PpJulia>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
      </PpJulia>
      <Animator src="./images/animator.png" alt="animator" />
      <InerAnimator>Animator</InerAnimator>
      <Ellipse src="./images/ellipse-1937.png" alt="elli1937" />
      <Employee200 src="./images/employee200.png" alt="employee" />
      <InerEmploye>
        200+
        <SpanEmploye>Employees</SpanEmploye>
      </InerEmploye>
      <Ellipse1934 src="./images/ellipse-1934.png" alt="ellipse1934" />
      <Ellipse1935 src="./images/ellipse-1935.png" alt="ellipse1935" />
      <UxDesign src="./images/animator.png" alt="uxdesign" />
      <InerUx>
        UX <SpanUx>Designers</SpanUx>
      </InerUx>
      <Ellipse1940 src="./images/ellipse-1940.png" alt="ellipse1940" />
      <Founder src="./images/employee200.png" alt="employee" />
      <InerFounder>
        2<SpanFounder>Founders</SpanFounder>
      </InerFounder>
      <Ellipse1939 src="./images/ellipse-1939.png" alt="ellipse1939" />
      <Devloper src="./images/animator.png" alt="uxdesign" />
      <InerDevloper>Developer</InerDevloper>
      <Ellipse1938 src="./images/ellipse-1938.png" alt="ellipse1938" />
      <Ellipse1936 src="./images/ellipse-1936.png" alt="ellipse1936" />
    </AllImages>
  );
};

export default AllImgs;
