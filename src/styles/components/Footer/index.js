import styled from "styled-components";

export const FooterWraper = styled.div`
  background: #000000;
  border-radius: 0 14vw 0 0;
  padding: 4vw 0 1vw 0;
`;

export const Container = styled.div`
  display: flex;
`;

export const InfoWraper = styled.div`
  margin: 2vw 4.5vw 0 9vw;
  padding: 0 0 0 0.5vw;
  width: 53%;
  border-right: 1px solid #ffffff;
`;

export const LogoWrap = styled.div`
  display: flex;
  width: 90%;
  border-bottom: 1px solid #ffffff;
  padding: 0 0 2.5vw 0;
`;

export const LogoContainer = styled.div`
  width: 37%;
`;

export const Logo = styled.img`
  width: 73%;
`;

export const HeadingsWraper = styled.div`
  width: 63%;
  padding: 0.7vw 0;
`;

export const Heading = styled.h4`
  color: rgba(255, 255, 255, 1);
  font-size: clamp(0.5rem, 1vw, 1.5rem);
  font-weight: 400;
  width: clamp(12.5rem, 25vw, 30rem);
  line-height: 1.5vw;
`;

export const ContentWraper = styled.div`
  display: flex;
  width: 92%;
  padding: 2vw 0;
`;

export const Lists = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2vw;
  padding: 1.7vw 0 2.2vw 0;
  border-right: 1px solid #ffffff;
  width: 25%;
`;

export const List = styled.h3`
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

export const BorderWrap = styled.div`
  height: 0.3vw;
  background: #f9c51c;
  width: 9vw;
`;

export const ListContent = styled.p`
  color: rgba(255, 255, 255, 1);
  font-size: clamp(0.6rem, 1vw, 1.5rem);
  font-weight: 400;
  width: 17vw;
  line-height: 1.5vw;
`;

export const Span = styled.p`
  font-size: clamp(0.5rem, 1vw, 1.5rem);
  font-weight: 400;
`;

export const FollowUSWraper = styled.div`
  margin: 2vw 0.5vw;
  display: flex;
  flex-direction: column;
`;

export const Follow = styled.h5`
  font-size: clamp(0.7rem, 1.15vw, 1.5rem);
  font-weight: 600;
  color: white;
  border-bottom: 1px solid #ffffff;
  padding: 0 0 1.4vw 0;
`;

export const IconsWrap = styled.div`
  display: flex;
  padding: 1vw 0;
  gap: 0 1.6vw;
  margin: 2.5vw 0 0 0;
`;
export const LinkIcon = styled.img`
  width: 2.4vw;
`;

export const Content = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 2.25vw;
  width: 23vw;
  margin: 3.5vw 0 0 0;
`;

export const InputWraper = styled.div`
  background-color: rgba(255, 255, 255, 1);
  padding: 0.7vw 0.7vw 0.7vw 1.14vw;
  display: flex;
  align-items: center;
  margin: 2.5vw 0;
`;

export const Mail = styled.img`
  width: 1.2vw;
`;

export const Inputmail = styled.input`
  border: none;
  margin: 0 0.5vw;
  font-size: 1vw;
  outline: none;
  font-weight: 300;
`;

export const Submit = styled.button`
  font-size: 1vw;
  font-weight: 700;
  padding: 0.8vh 0.7vw;
  background-color: rgba(249, 197, 28, 1);
  border: none;
`;

export const Wraper = styled.div`
  background-color: #ffffff;
  display: flex;
  padding: 1.2vh 9vw;
  justify-content: space-between;
  margin: 2vh 0 1vw 0;
`;

export const WraperList = styled.div`
  display: flex;
  gap: 0 4.3vw;
  font-size: 1vw;
`;

export const LegalContent = styled.p`
  font-size: 1.2vw;
`;
