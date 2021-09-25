import React from "react";
import Sidebar from "./Sidebar/SIdebar";
import { StyledTodos, StyledTodoMain, StyledPreview } from "./Todos.styles";
import noPreview from "./Vector.png";

function Todos() {
  return (
    <StyledTodos>
      <StyledTodoMain>
        <Sidebar />
        {/* <Title/> */}
      </StyledTodoMain>

      <StyledPreview>
        <img src={noPreview} alt="no preview" />
        <p style={{ margin: "10px auto" }}>
          No open todo/note is currently opened until you create a task
        </p>
      </StyledPreview>
    </StyledTodos>
  );
}

export default Todos;
