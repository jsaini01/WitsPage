import styled from "styled-components";

export const OurTeamsDiv = styled.div`
  border: solid black;

  margin: 18.5vw 0 0 0;
`;

export const Headings = styled.div`
  text-align: center;
`;

export const SmallHeading = styled.p`
  color: rgba(130, 130, 130, 1);
  font-weight: 400;
  font-size: clamp(0.5rem, 1.4vw, 1.5rem);
`;

export const MainHeading = styled.h1`
  font-size: clamp(2rem, 3.7vw, 4.5rem);
  height: clamp(1.6rem, 3.7vw, 4.5rem);
  line-height: 6vw;
`;

export const BorderDiv = styled.div`
  background-color: rgba(249, 197, 28, 1);
  height: clamp(0.5rem, 1vw, 1.5rem);
  width: clamp(10rem, 18.5vw, 20rem);
  margin: auto;
`;

export const PeraHeading = styled.p`
  font-size: clamp(0.5rem, 1.4vw, 2rem);
  text-transform: capitalize;
  font-weight: 700;
  line-height: 6.5vw;
`;

// img

export const AllImages = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.8vw 0;
  position: relative;
`;

export const BackImg = styled.img`
  width: calc(100% - 30%);
`;

export const Animator = styled.img`
  position: absolute;
  right: clamp(20rem, 42.5vw, 60rem);
  top: clamp(0.5rem, 0.6vw, 2rem);
  width: calc(100% - 90.8%);
`;
