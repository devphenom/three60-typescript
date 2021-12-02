import React, { FC } from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  text: string;
  bgColor?: string;
  [x: string]: any;
}
const Button: FC<ButtonProps> = ({ children, text, bgColor, sm, ...other }) => {
  return (
    <StyledButton bgColor={bgColor} {...other} sm={sm}>
      {children}
      {text}
    </StyledButton>
  );
};

export default Button;

// export const MobileBtn : FC<ButtonProps> = ({text, bgColor, ...other}) => {
//   return StyledMobileBtn
// }
