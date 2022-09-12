import styled from "styled-components";

export const MainWraper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 10vw;
  padding: 5vw 0 0 0;
`;
export const Wraper = styled.div`
  width: clamp(500px, 35vw, 900px);
`;

export const BusinessContent = styled.p`
  font-size: clamp(0.7rem, 1.3vw, 2rem);
  box-sizing: border-box;
  font-weight: 500;
  margin: 1vw 0;
  width: clamp(300px, 35vw, 900px);
  line-height: 130%;
`;
export const BusinessHeading = styled.h1`
  font-size: clamp(2.3rem, 4.3vw, 7rem);
  font-weight: 900;

  width: clamp(330px, 38vw, 900px);
`;
export const Span = styled.span`
  margin: 0 0 0 1vw;
  color: rgba(249, 197, 28, 1);
`;

export const ArrowImg = styled.img`
  width: clamp(0.4rem, 0.8vw, 1.5rem);
`;

export const TellUsButton = styled.button`
  background: #1d2e88;
  border: none;
  padding: 1.3vw 0;
  color: #ffffff;
  font-size: clamp(0.5rem, 1vw, 1.5rem);
  width: 14vw;
  position: absolute;
  transition: 0.5s;
`;

export const ArrowButton = styled.button`
  background: #f9c51c;
  border: none;
  padding: 1.22vw 0.5vw;
  color: rgba(29, 46, 136, 1);
  display: flex;
  align-items: center;
  position: absolute;
  left: 14vw;
  z-index: -1;
`;

export const ButtonWrap = styled.div`
  display: flex;
  margin: 4vw 0 10vw 0;
  width: 16vw;
  position: relative;

  &:hover {
    ${TellUsButton} {
      width: 16vw;
    }
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const SvgWraper = styled.div`
  display: flex;
  gap: 1vw;
`;

export const FollowUS = styled.p`
  font-size: clamp(0.6rem, 1.1vw, 1.3rem);
  font-weight: 600;
`;

export const Line = styled.div`
  margin: 0 0.8vw;
  width: clamp(3rem, 5vw, 10rem);
  border-bottom: 2px solid black;
`;

export const BackImgContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  top: 20px;
  right: 0px;
  z-index: -1;
  opacity: 0.8;
`;

export const BackImg = styled.img`
  width: clamp(20rem, 42vw, 70rem);
  height: clamp(31rem, 55vw, 70rem);
`;
