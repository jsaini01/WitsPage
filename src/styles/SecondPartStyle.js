import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  border: solid black;
  margin: 0 0 0 10vw;
  padding: 5vw 0;
`;
export const Right = styled.div`
  h1 {
    font-size: clamp(2rem, 4vw, 7rem);
    font-weight: 900;
  }
  span {
    margin: 0 0 0 1vw;
    color: rgba(249, 197, 28, 1);
  }
  p {
    font-size: clamp(1rem, 1.2vw, 1.5rem);
    font-weight: 500;
    margin: 1vw 0;
  }
`;

export const SecBtn = styled.div`
  display: flex;
  margin: 4vw 0;

  .first {
    background: #1d2e88;
    border: none;
    padding: 0.9vw 1.5vw;
    color: #ffffff;
    font-size: clamp(0.6rem, 1vw, 1.5rem);
  }
  .second {
    background: #f9c51c;
    border: none;
    padding: 0.9vw 0.5vw;
    color: rgba(29, 46, 136, 1);
  }
  i {
    font-size: clamp(0.7rem, 1.1vw, 1.5rem);
  }
`;

export const Icon = styled.div`
  display: flex;
`;
