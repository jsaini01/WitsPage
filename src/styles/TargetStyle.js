import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  box-sizing: border-box;

  margin: 0 4vw 0 0;
`;

export const SideImg = styled.div`
  display: flex;
`;

export const Img = styled.img`
  width: clamp(10rem, 19vw, 25rem);
`;

// Side img

export const LeftSideTrans = styled.div`
  display: block;
  position: relative;
  height: clamp(5rem, 8vw, 12rem);
  width: calc(100% - 88%);

  top: clamp(15rem, 25vw, 28rem);
  transform: rotate(-90deg);
`;

export const Div = styled.div`
  width: clamp(14.5rem, 19.8vw, 40rem);
  border-bottom: 15px solid #f9c51c;
  height: clamp(3.7rem, 5.5vw, 6rem);
`;

export const LeftPera = styled.p`
  font-size: clamp(0.9rem, 1.3vw, 2rem);
  line-height: 2vw;
  font-weight: 500;
  color: #828282;
`;

export const LeftHeading = styled.h1`
  font-size: clamp(2.2rem, 3vw, 3.5rem);
`;

export const TransBorder = styled.div``;

// Last Content

export const TwoSection = styled.div`
  justify-content: center;
  box-sizing: border-box;
  display: flex;
  width: calc(100% - 10%);
  flex-direction: column;
`;

export const SmallHeading = styled.h4`
  font-size: clamp(0.8rem, 1.4vw, 3rem);
  width: clamp(29.5rem, 51vw, 60rem);
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
`;

export const P = styled.p`
  margin: 2vw 0 0 0;
  width: clamp(29.5rem, 54vw, 60rem);
  font-weight: 500;
  font-size: clamp(0.6rem, 1.1vw, 2rem);
  text-transform: capitalize;
`;

export const Border = styled.div`
  margin: 3vw 1vw 3vw 0;
  width: clamp(30rem, 53vw, 60rem);
  border-bottom: 5px solid #1d2e88;
`;

export const TargetHeadings = styled.div`
  display: flex;
`;

export const NumberTarget = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

export const HeadingTargets = styled.h1`
  color: #1d2e88;
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 5rem);
`;

export const TargetPera = styled.h3`
  color: #1d2e88;
  font-size: clamp(1rem, 1.5vw, 2rem);
`;

export const HorizontBorder = styled.div`
  margin: 2vw 2vw 1vw 3.5vw;

  height: clamp(2.5rem, 3.5vw, 4rem);
  border-left: 2px solid #1d2e88;
`;