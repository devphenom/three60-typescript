import styled from "styled-components";

interface ButtonProps {
  bgColor?: string;
  sm: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  /* height: 46px; */
  color: white;
  cursor: pointer;
  background: ${({ bgColor }) => bgColor || "#28ba63"};
  border-radius: 5px;
  border: 1px solid #28ba63;
  display: ${({ sm }) => (sm ? "none" : "inline-block")};

  @media screen and (max-width: 768px) {
    /* display: none; */
    display: ${({ sm }) => (sm ? "block" : "none")};
    position: ${({ sm }) => (sm ? "fixed" : "none")};
    margin: 10px auto;
    z-index: 1;
    /* left: 0; */
    overflow-x: hidden;
    width: 80%;
  }
`;
