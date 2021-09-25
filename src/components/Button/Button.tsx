import React, { FC } from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  text: string;
  bgColor?: string;
}
const Button: FC<ButtonProps> = ({ text, bgColor }) => {
  return <StyledButton bgColor={bgColor}>{text}</StyledButton>;
};

export default Button;
