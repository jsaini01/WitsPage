import styled from "styled-components";

export const TargetContainer = styled.div`
  display: flex;
  box-sizing: border-box;

  margin: 0 4vw 5vw 0;
`;

export const BackImgWraper = styled.div`
  display: flex;
`;

export const BackImg = styled.img`
  width: clamp(10rem, 19vw, 25rem);
`;

// Side img

export const OurNumbersWraper = styled.div`
  display: block;
  position: relative;
  height: clamp(5rem, 8vw, 12rem);
  width: calc(100% - 88%);

  top: clamp(15rem, 30vw, 28rem);
  transform: rotate(-90deg);
`;

export const TextWrap = styled.div`
  width: clamp(11.5rem, 19.8vw, 40rem);

  border-bottom: 1vw solid #f9c51c;
  height: clamp(2.8rem, 5.3vw, 5.8rem);
`;

export const TextContant = styled.p`
  font-size: clamp(0.7rem, 1.3vw, 2rem);
  line-height: 2vw;
  font-weight: 500;
  color: #828282;
`;

export const TextHeading = styled.h1`
  font-size: clamp(1.7rem, 3vw, 3.5rem);
`;

// Last Content

export const Container = styled.div`
  justify-content: center;
  box-sizing: border-box;
  display: flex;
  width: calc(100% - 10%);
  flex-direction: column;
  padding: 10vw 0 0 0;
`;

export const ContainerHeading = styled.h4`
  font-size: clamp(0.8rem, 1.4vw, 3rem);
  width: clamp(29.5rem, 51vw, 60rem);
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
`;

export const ContainerContent = styled.p`
  margin: 2vw 0 0 0;
  width: clamp(29.5rem, 54vw, 60rem);
  font-weight: 500;
  font-size: clamp(0.6rem, 1.1vw, 2rem);
  text-transform: capitalize;
`;

export const BorderWrap = styled.div`
  margin: 3vw 1vw 3vw 0;
  width: clamp(30rem, 53vw, 60rem);
  border-bottom: 5px solid #1d2e88;
`;

export const TargetWraper = styled.div`
  display: flex;
`;

export const Achivements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AchiveGoal = styled.h1`
  color: #1d2e88;
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 5rem);
`;

export const Goals = styled.h3`
  color: #1d2e88;
  font-size: clamp(1rem, 1.5vw, 2rem);
`;

export const HrBorderWrap = styled.div`
  margin: 2vw 2vw 1vw 3.5vw;

  height: clamp(2.5rem, 3.5vw, 4rem);
  border-left: 2px solid #1d2e88;
`;
