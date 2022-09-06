import styled from "styled-components";

export const FooterComponent = styled.div`
  background: #000000;
  border-radius: 0 14vw 0 0;
  padding: 4vw 0 1vw 0;
`;

export const Inner = styled.div`
  display: flex;
`;

export const AllFooter = styled.div`
  margin: 2vw 4.5vw 0vw 9vw;
  padding: 0 0 0 0.5vw;
  width: calc(100% - 47%);
  border-right: 1px solid #ffffff;
`;

export const Upper = styled.div`
  display: flex;
  width: calc(100% - 10%);
  border-bottom: 1px solid #ffffff;
  padding: 0 0 2.5vw 0;
`;
// logo
export const FooterImg = styled.div`
  width: calc(100% - 63%);
`;

export const Img = styled.img`
  width: calc(100% - 27%);
`;

// headings
export const HeadingsContent = styled.div`
  width: calc(100% - 37%);
  padding: 0.7vw 0;
`;

export const Heading = styled.h4`
  color: rgba(255, 255, 255, 1);
  font-size: clamp(0.5rem, 1vw, 1.5rem);
  font-weight: 400;
  width: clamp(12.5rem, 25vw, 30rem);
  line-height: 1.5vw;
`;

// leftbottom

export const LeftBottom = styled.div`
  display: flex;
  width: calc(100% - 8%);
  padding: 2vw 0;
`;

export const Lists = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2vw;
  padding: 1.7vw 0 2.2vw 0;
  border-right: 1px solid #ffffff;
  width: calc(100% - 75%);
`;

export const Heads = styled.h3`
  color: rgba(255, 255, 255, 1);
  font-size: clamp(0.7rem, 1.12vw, 1.5rem);
  font-weight: 600;
`;

export const Listcenter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.2vw;
  border-right: 1px solid #ffffff;
  width: calc(100% - 60% - 3.6vw);
  padding: 1.3vw 0 0 3.6vw;
`;

export const ListLast = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.4vw;

  padding: 1.25vw 0 0 3vw;
`;

export const BorderFotter = styled.div`
  height: 0.3vw;
  background: #f9c51c;
  width: clamp(5rem, 9vw, 15rem);
`;

export const Peras = styled.p`
  color: rgba(255, 255, 255, 1);
  font-size: clamp(0.6rem, 1vw, 1.5rem);
  font-weight: 400;
  width: clamp(5rem, 17vw, 25rem);

  line-height: 1.5vw;
`;

export const Spans = styled.p`
  font-size: clamp(0.5rem, 1vw, 1.5rem);
  font-weight: 400;
`;

// rightFooter

export const RighterDiv = styled.div`
  margin: 2vw 0.5vw;
  display: flex;
  flex-direction: column;
`;

export const FollowHeading = styled.h5`
  font-size: clamp(0.7rem, 1.15vw, 1.5rem);
  font-weight: 600;
  color: white;
  border-bottom: 1px solid #ffffff;
  padding: 0 0 1.4vw 0;
`;

export const Icons = styled.div`
  display: flex;
  padding: 1vw 0;
  gap: 0 1.6vw;
  margin: 2.5vw 0 0 0;
`;
export const Indeed = styled.img`
  width: clamp(1.2rem, 2.4vw, 3rem);
`;
export const Facebook = styled.img`
  width: clamp(1.2rem, 2.4vw, 3rem);
`;
export const Twiter = styled.img`
  width: clamp(1.2rem, 2.4vw, 3rem);
`;
export const Youtube = styled.img`
  width: clamp(1.2rem, 2.4vw, 3rem);
`;

export const CenterHeading = styled.h1`
  color: white;
  font-weight: 700;
  font-size: clamp(1rem, 2.25vw, 4rem);
  width: clamp(10rem, 23vw, 30rem);
  margin: 3.5vw 0 0 0;
`;

// input
export const InputBody = styled.div`
  background-color: rgba(255, 255, 255, 1);
  padding: 0.7vw 0.7vw 0.7vw 1.14vw;
  display: flex;
  align-items: center;

  margin: 2.5vw 0;
`;

export const Mail = styled.img`
  width: clamp(0.5rem, 1.2vw, 1.5rem);
`;

export const Inputmail = styled.input`
  border: none;
  margin: 0 0.5vw;
  font-size: clamp(0.5rem, 1vw, 1.5rem);
  /* color: rgba(202, 202, 202, 1); */
  outline: none;
  font-weight: 300;
`;

export const Submit = styled.button`
  font-size: clamp(0.5rem, 1vw, 1.5rem);
  font-weight: 700;
  padding: 0.58vw 0.7vw;
  background-color: rgba(249, 197, 28, 1);
  border: none;
`;

// whitebox
export const WhiteDiv = styled.div`
  background-color: #ffffff;
  display: flex;
  padding: 0.7vw 9vw;
  justify-content: space-between;
  margin: 2vw 0 1vw 0;
`;

export const ImportantPera = styled.div`
  display: flex;
  gap: 0 4.3vw;
  font-size: clamp(0.6rem, 1vw, 1.5rem);
`;

export const TermCondition = styled.p``;

export const Policy = styled.p``;

export const Legal = styled.p``;

export const Copyright = styled.p`
  font-size: clamp(0.6rem, 1vw, 1.5rem);
`;
