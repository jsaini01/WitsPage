import styled from "styled-components";

export const BlogWraper = styled.div`
  margin: 6.6vw 0 0 8vw;
`;

export const Wraper = styled.div`
  padding: 0 0 0 1.7vw;
`;

export const Contant = styled.p`
  color: rgba(130, 130, 130, 1);
  font-size: clamp(0.6rem, 1.34vw, 1.5rem);
  font-weight: 400;
`;

export const MainHeading = styled.h1`
  color: rgba(29, 29, 29, 1);
  font-size: clamp(2rem, 3.7vw, 4.5rem);
  font-weight: 700;
  margin: 0.4vw 0 0 0;
  height: clamp(1.7rem, 3.2vw, 4.5rem);
`;

export const BorderWrap = styled.div`
  background-color: rgba(249, 197, 28, 1);
  height: 2vh;
  width: clamp(8.5rem, 15.9vw, 20rem);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerContant = styled.p`
  width: calc(100% - 33%);
  margin: 2vw 0 0 0;
  font-weight: 600;
  font-size: clamp(0.8rem, 1.35vw, 2rem);
  text-transform: capitalize;
`;

export const IconImg = styled.div`
  width: calc(100% - 64.5%);
  display: flex;
  margin: 0.5vw 0 0 0;
  column-gap: 1.2vw;
`;

export const Lefticon = styled.img`
  width: calc(100% - 87%);
`;

export const Righticon = styled.img`
  width: calc(100% - 87%);
`;

// imgs
export const ImageWraper = styled.div`
  display: grid;
  grid-template-areas: "wil blockchain" "wil commercial";
  margin: 6vw 0 0 2vw;
  justify-content: flex-start;
  height: fit-content;
  width: fit-content;
  gap: 1.5vw;
  position: relative;
`;
export const WilBlog = styled.img`
  width: clamp(10rem, 35.5vw, 60rem);
  grid-area: wil;
`;
export const Blockchain = styled.img`
  width: clamp(10rem, 30.5vw, 60rem);
  grid-area: blockchain;
`;
export const Commercial = styled.img`
  width: clamp(10rem, 30.5vw, 60rem);
  grid-area: commercial;
`;

export const ContentWrap = styled.div`
  position: absolute;
  background-color: rgba(29, 46, 136, 1);
  display: flex;
  flex-direction: column;
  bottom: 0.16vw;
  padding: 2.05vw 1.8vw;
  border-radius: 1.1vw;
  height: fit-content;
  width: clamp(10rem, 35.5vw, 60rem);
`;

export const ContentHeading = styled.h3`
  color: rgba(255, 255, 255, 1);
  font-size: clamp(0.7rem, 1.63vw, 2rem);
  margin: 1vw 0;
`;

export const Content = styled.p`
  color: rgba(255, 255, 255, 1);
  line-height: 1.5vw;
  font-size: clamp(0.5rem, 1vw, 1.5rem);
`;

export const BlockchainContent = styled.h3`
  position: absolute;
  font-size: clamp(0.7rem, 1.63vw, 2rem);
  right: 19.2vw;
  top: calc(100% - 60.7%);
  color: #ffffff;
`;

export const CommercialContent = styled.h3`
  position: absolute;
  font-size: clamp(0.7rem, 1.63vw, 2rem);
  right: 19.2vw;
  top: calc(100% - 11.7%);
  color: #ffffff;
`;
