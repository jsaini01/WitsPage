import React from "react";

import {
  ImageWraper,
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
  AnimatorContent,
  UxContent,
  UxSpan,
  Devloper,
  DevloperContent,
  EmployeContent,
  EmployeSpan,
  Founder,
  FounderContent,
  FounderSpan,
  JuliaName,
  JuliaDescription,
  JuliaContent,
} from "styles/views/homepage/ourTeam";

import backimg from "assets/images/backimg.png";
import julia from "assets/images/julia-center-with.png";
import animator from "assets/images/animator.png";
import ellipse1937 from "assets/images/ellipse-1937.png";
import employee200 from "assets/images/employee200.png";
import ellipse1934 from "assets/images/Ellipse-1934.png";
import ellipse1935 from "assets/images/Ellipse-1935.png";
import uxDesign from "assets/images/animator.png";
import ellipse1940 from "assets/images/ellipse-1940.png";
import founder from "assets/images/employee200.png";
import ellipse1939 from "assets/images/ellipse-1939.png";
import devloper from "assets/images/animator.png";
import ellipse1938 from "assets/images/ellipse-1938.png";
import ellipse1936 from "assets/images/ellipse-1936.png";

const Images = () => (
  <ImageWraper>
    <BackImg src={backimg} alt="backimg" />
    <JuliaCenter src={julia} alt="julia" />
    <JuliaName>Julia Carter</JuliaName>
    <JuliaDescription>Sr. Developer</JuliaDescription>
    <JuliaContent>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh euismod tincidunt ut laoreet dolore magna aliquam.
    </JuliaContent>
    <Animator src={animator} alt="animator" />
    <AnimatorContent>Animator</AnimatorContent>
    <Ellipse src={ellipse1937} alt="elli1937" />
    <Employee200 src={employee200} alt="employee" />
    <EmployeContent>
      200+
      <EmployeSpan>Employees</EmployeSpan>
    </EmployeContent>
    <Ellipse1934 src={ellipse1934} alt="ellipse1934" />
    <Ellipse1935 src={ellipse1935} alt="ellipse1935" />
    <UxDesign src={uxDesign} alt="uxdesign" />
    <UxContent>
      UX <UxSpan>Designers</UxSpan>
    </UxContent>
    <Ellipse1940 src={ellipse1940} alt="ellipse1940" />
    <Founder src={founder} alt="employee" />
    <FounderContent>
      2<FounderSpan>Founders</FounderSpan>
    </FounderContent>
    <Ellipse1939 src={ellipse1939} alt="ellipse1939" />
    <Devloper src={devloper} alt="uxdesign" />
    <DevloperContent>Developer</DevloperContent>
    <Ellipse1938 src={ellipse1938} alt="ellipse1938" />
    <Ellipse1936 src={ellipse1936} alt="ellipse1936" />
  </ImageWraper>
);

export default Images;
