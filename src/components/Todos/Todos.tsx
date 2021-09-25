import React from "react";
import Sidebar from "./Sidebar/SIdebar";
import {
  StyledTodos,
  StyledTodoMain,
  StyledTodoArea,
  StyledPreview,
} from "./Todos.styles";
import Button from "../Button/Button";
import Title from "../../components/Title/Title";
import noPreview from "./Vector.png";

function Todos() {
  return (
    <StyledTodos>
      <StyledTodoMain>
        <Sidebar />
        <StyledTodoArea style={{ width: "75%" }}>
          <Title text="Todos">
            <Button text="Create Note" />
          </Title>
        </StyledTodoArea>
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
