import React from "react";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import {
  StyledTodos,
  StyledTodoMain,
  StyledTodoArea,
  StyledPreview,
} from "./Todos.styles";
import Button from "../../../../components/Button/Button";
import Title from "../../../../components/Title/Title";
import Todo from "../../../../components/Todo/Todo";
import noPreview from "./Vector.png";
import noTodo from "./Group 3.png";
function Todos() {
  return (
    <StyledTodos>
      <StyledTodoMain>
        <Sidebar />
        <StyledTodoArea>
          <Title text="All Todos">
            <Button text="Create Note" />
          </Title>
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "30px",
            }}
          >
            <img src={noTodo} alt="no todo" />
            <p style={{ margin: "10px auto" }}>No todos at the moment</p>
          </div> */}
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
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
