import styled from "styled-components";

export const Img = styled.div`
  width: calc(100% - 80%);
`;

export const Wits = styled.img`
  width: clamp(5rem, 11vw, 15rem);
`;

export const Div = styled.div`
  display: flex;
  margin: 0 6vw 0 10vw;
`;

export const Nav = styled.div`
  width: calc(100% - 40%);
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2.5vw;
`;

export const DropDown = styled.p`
  cursor: pointer;
  font-size: clamp(0.5rem, 1.2vw, 1.3rem);
  font-weight: 600;
  i {
    margin: 0 0.5vw;

    font-size: clamp(0.6rem, 1.2vw, 1.3rem);
  }
`;

export const Btn = styled.div`
  width: calc(100% - 80%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LetsConnect = styled.button`
  background: #f9c51c;
  padding: 0.8vw 1.2vw;
  font-weight: 600;
  font-size: clamp(0.5rem, 1.1vw, 1.3rem);
  border: none;
`;
