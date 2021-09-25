import styled from "styled-components";

interface ButtonProps {
  bgColor?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  /* height: 46px; */
  color: white;
  cursor: pointer;
  background: ${({ bgColor }) => bgColor || "#28ba63"};
  border-radius: 5px;
  border: 1px solid #28ba63;
`;
