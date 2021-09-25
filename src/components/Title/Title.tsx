import React from "react";
import { StyledTitle } from "./Title.styles";

interface TitleProps {
  text: string;
  children: React.ReactNode;
}
const Title = ({ text, children }) => {
  return (
    <StyledTitle>
      <h1>{`${"0"} ${text}`}</h1>
      {children}
    </StyledTitle>
  );
};

export default Title;
