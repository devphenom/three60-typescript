import React from "react";
import { StyledPreview } from "./TodoAside.styles";
import noPreview from "./Vector.png";

export default function TodoAside() {
  return (
    <StyledPreview>
      <img src={noPreview} alt="no preview" />
      <p style={{ margin: "10px auto" }}>
        No open todo/note is currently opened until you create a task
      </p>
    </StyledPreview>
  );
}
