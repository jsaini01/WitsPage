import styled from "styled-components";

export const ContanctUsWraper = styled.div`
  padding: 2vw;
  margin: 15vw 7.8vw;
`;

export const HeadingWraper = styled.div``;

export const IdeaContent = styled.p`
  color: rgba(130, 130, 130, 1);
  font-size: clamp(0.5rem, 1.4vw, 2rem);
`;

export const MainHeading = styled.h1`
  color: rgba(29, 29, 29, 1);
  font-weight: 700;
  font-size: clamp(2rem, 3.75vw, 5rem);
  height: clamp(1.7rem, 3.1vw, 5rem);
  font-weight: 700;
`;

export const BorderWrap = styled.div`
  background-color: rgba(249, 197, 28, 1);
  height: 1vw;
  width: clamp(11.1rem, 21vw, 30rem);
`;

export const Content = styled.p`
  font-size: clamp(0.8rem, 1.4vw, 2rem);

  font-weight: 700;
  margin: 2.6vw 0;
  text-transform: capitalize;
`;

// contact
export const ContactWrap = styled.div`
  border: 1px solid rgba(29, 46, 136, 1);
  border-radius: 16px;
  position: relative;
  display: flex;
`;

export const BackImgWraper = styled.div`
  background: #1d2e88;
  width: calc(100% - 54.75%);
  height: clamp(26rem, 54vw, 55rem);
  border-radius: 14px 0 0 14px;
`;
export const Backimg = styled.img`
  width: 100%;
  height: calc(100% - 0%);
`;

export const BackContent = styled.h1`
  position: absolute;
  top: clamp(10rem, 20vw, 30rem);
  font-weight: 700;
  font-size: clamp(1.8rem, 3.75vw, 5rem);
  width: calc(100% - 63%);
  left: clamp(1rem, 3.8vw, 20rem);
  color: #ffffff;
`;

// form

export const ContactFormWraper = styled.div`
  color: rgba(29, 29, 29, 1);
  width: calc(100% - 45.26%);
  border-radius: 0 14px 14px 0;
  padding: 4vw 0 0 4.9vw;
  display: flex;
  flex-direction: column;
  row-gap: 1vw;
`;

export const MainContent = styled.p`
  font-size: clamp(0.6rem, 1.14vw, 2rem);
  font-weight: 600;
`;

export const Select = styled.select`
  /* margin: 1vw 0; */
  width: calc(100% - 12.5%);
  height: calc(100% - 93.8%);
  border: 1px solid #000000;
  font-size: clamp(0.5rem, 1.1vw, 1.5rem);
  font-weight: 600;
`;
export const Option = styled.option`
  color: rgba(79, 79, 79, 1);
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid;
  font-size: clamp(0.7rem, 1.14vw, 2rem);
  width: calc(100% - 12.5%);
  margin: 1.3vw 0 0 0;
  padding: 0.5vw 0;
`;

export const AttachmentWrap = styled.div`
  margin: 2.3vw 0;
  display: flex;
  column-gap: 1vw;
`;

export const Attachment = styled.img`
  font-weight: 600;
  width: clamp(0.7rem, 1.25vw, 1.5rem);
`;

export const AttachmentContent = styled.p`
  font-weight: 600;
  font-size: clamp(0.7rem, 1.14vw, 1.5rem);
`;

export const Optional = styled.p`
  font-weight: 400;
  font-size: clamp(0.7rem, 1.14vw, 1.5rem);
`;

export const Send = styled.button`
  background-color: rgba(249, 197, 28, 1);
  width: calc(100% - 12.5%);
  height: calc(100% - 93.3%);
  padding: 0.99vw 0;
  text-align: center;
  font-size: clamp(0.6rem, 1.14vw, 1.5rem);
  font-weight: 700;
  border: none;
`;

export const BorderLineWrap = styled.div`
  display: flex;
  margin: 1vw 0 0 0;
  align-items: center;
`;

export const BorderLeft = styled.div`
  height: 0.1vw;
  width: 1vw;
  background-color: rgba(51, 51, 51, 1);
  width: calc(100% - 61.2%);
`;

export const BorderLineContent = styled.p`
  font-size: clamp(0.7rem, 1.14vw, 1.5rem);
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  margin: 0 1vw;
`;

export const BorderRight = styled.div`
  background-color: rgba(51, 51, 51, 1);
  height: 0.1vw;
  width: calc(100% - 61.2%);
`;

export const HelpContent = styled.p`
  font-size: clamp(0.5rem, 1.14vw, 1.5rem);
  font-weight: 600;
  text-align: center;
  margin: 1vw 0 0 1.8vw;
  width: calc(100% - 24%);
`;

export const LinkButtonWraper = styled.div`
  display: flex;
  margin: 2vw 5vw 0 0;
  justify-content: space-between;
  align-items: center;
  border: rgba(0, 0, 0, 1);
`;
export const ButtonWraper = styled.button`
  display: flex;
  width: calc(100% - 51.4%);
  align-items: center;
  padding: 0.85vw 0;

  justify-content: center;
`;

export const ButtonImg = styled.img`
  width: clamp(0.6rem, 1.68vw, 2rem);
  margin: 0 0.5vw;
`;

export const ButtonContent = styled.p`
  font-size: clamp(0.6rem, 1.17vw, 1.5rem);
`;
