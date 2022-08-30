import styled from "styled-components";

export const SlideSite = styled.div`
  display: flex;
  border: solid black;
`;

export const SideImg = styled.div`
  border: solid black;
  width: calc(100% - 78%);
  margin: 3vw 0 0 0;
`;

export const LeftImg = styled.img`
  width: calc(100% - 5%);
`;

// content
export const Header = styled.div`
  margin: 0 0 0 3vw;
  padding: 2vw 0 0 0;
  border: solid black;
  width: calc(100% - 22%);
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  column-gap: clamp(0.1rem, 1.5vw, 1.8rem);
`;
export const LeftArrow = styled.img`
  margin: 0 0.7vw;
  width: clamp(2rem, 4vw, 10rem);
`;

export const RightArrow = styled.img`
  width: clamp(2rem, 4vw, 10rem);
  margin: 0 0.7vw;
`;
export const ArrowImg = styled.div`
  display: flex;

  width: calc(100% - 60%);
  margin: 1.6vw 0 0 0;
`;

export const HeaderHead = styled.p`
  color: #828282;
  font-size: clamp(0.8rem, 1.3vw, 1.8rem);
  font-weight: 500;
`;

export const HeaderHeading = styled.h1`
  color: #1d1d1d;
  font-size: clamp(2rem, 3.7vw, 4rem);
  border-bottom: 12px solid #f9c51c;
  width: clamp(12.8rem, 23.5vw, 25rem);
  height: clamp(2.5rem, 4vw, 5rem);
`;

export const MainHeading = styled.h3`
  color: rgba(40, 40, 40, 1);
  text-transform: capitalize;
  font-size: clamp(0.8rem, 1.4vw, 2rem);
  margin: 1.8vw 0 0;
  width: calc(100% - 10%);
  padding: 0 0 0 1vw;
`;

export const SpanPera = styled.p`
  color: rgba(79, 79, 79, 1);
  text-transform: none;
  margin: 1.4vw 0 0;
  line-height: 1.5vw;
  font-size: clamp(0.5rem, 1.2vw, 2rem);
  font-weight: 400;
  width: clamp(24rem, 50vw, 60rem);
  word-spacing: 0.1rem;
`;

// profile
export const ProfileContent = styled.div`
  background: #f1f1f1;
  width: calc(100% - 44%);
  border-radius: 16px;
  border: 1px solid #1d2e88;
  margin: 4vw 0 0 1vw;
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Circle = styled.img`
  width: clamp(5rem, 10vw, 12rem);
  margin: 0 3vw 0 6vw;
`;

export const Name = styled.div``;

export const NameHeadings = styled.h2`
  color: rgba(29, 29, 29, 1);
  font-size: clamp(0.9rem, 1.6vw, 2rem);
`;

export const Destination = styled.p`
  color: #94a3b8;
  font-size: clamp(0.6rem, 1.07vw, 1.5rem);
  line-height: 2.1vw;
`;

export const Stars = styled.div`
  margin: 0.8vw 0 0 0;
  display: flex;
  justify-content: space-between;
`;

export const Fillstart = styled.img`
  width: clamp(0.9rem, 1.5vw, 2rem);
`;

export const About = styled.p`
  color: rgba(29, 29, 29, 1);
  font-weight: 500;
  margin: 2vw auto;
  font-size: clamp(0.5rem, 1.02vw, 1.5rem);
  width: clamp(13rem, 29vw, 40rem);
  line-height: 1.4vw;
  word-spacing: 0.1vw;
`;
