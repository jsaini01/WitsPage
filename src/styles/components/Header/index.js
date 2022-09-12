import styled from "styled-components";

export const Img = styled.div`
  width: 20%;
`;

export const HeaderWraper = styled.div`
  display: flex;
  margin: 0 6vw 0 10vw;
`;

export const Navbar = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2.5vw;
`;

export const DropDown = styled.p`
  cursor: pointer;
  font-size: clamp(0.5rem, 1.2vw, 1.3rem);
  font-weight: 600;
  transition: 0.5s all ease-in-out;
  border-bottom: 0px solid rgba(249, 197, 28, 0);
  &:hover {
    border-bottom: 2px solid rgba(249, 197, 28, 1);
  }
`;

export const DownArrow = styled.img`
  margin: 0 0.5vw;
  width: 1vw;
`;

export const Connectbutton = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LetsConnect = styled.button`
  background: #f9c51c;
  padding: 5% 9%;
  font-weight: 600;
  font-size: clamp(0.5rem, 1.1vw, 1.3rem);
  border: 1px solid rgba(29, 29, 29, 0);
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(29, 29, 29, 1);
  }

  &:active {
    background-color: black;
    color: white;
  }
`;
