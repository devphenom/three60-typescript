import React, { FC } from "react";
import { StyledTitle } from "./Title.styles";

interface TitleProps {
  text: string;
  children?: React.ReactNode;
}
const Title: FC<TitleProps> = ({ text, children }) => {
  return (
    <StyledTitle>
      <h1>{text}</h1>
      {children}
    </StyledTitle>
  );
};

export default Title;
