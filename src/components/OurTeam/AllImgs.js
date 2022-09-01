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
} from "../../styles/OurTeamStyle";

const AllImgs = () => {
  return (
    <AllImages>
      <BackImg src="./images/backimg.png" alt="backimg" />
      <JuliaCenter src="./images/julia-center-with.png" alt="julia" />
      <Animator src="./images/animator.png" alt="animator" />
      <Ellipse src="./images/ellipse-1937.png" alt="elli1937" />
      <Employee200 src="./images/employe200.png" alt="employee" />
      <Ellipse1934 src="./images/ellipse-1934.png" alt="ellipse1934" />
      <Ellipse1935 src="./images/ellipse-1935.png" alt="ellipse1935" />
      <UxDesign src="./images/uxdesigner.png" alt="uxdesign" />
      <Ellipse1940 src="./images/ellipse-1940.png" alt="ellipse1940" />
      <Ellipse1939 src="./images/ellipse-1939.png" alt="ellipse1939" />
      <Ellipse1938 src="./images/ellipse-1938.png" alt="ellipse1938" />
    </AllImages>
  );
};

export default AllImgs;
