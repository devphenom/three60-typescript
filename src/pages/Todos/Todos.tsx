import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  StyledTodos,
  StyledTodoMain,
  StyledTodoArea,
  StyledPreview,
} from "./Todos.styles";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Todo from "../../components/Todo/Todo";
import noPreview from "./Vector.png";
import noTodo from "./Group 3.png";

export interface TodoData {
  name: string;
  date: object;
  tag: string;
}

const todoData: TodoData[] = [
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date(),
    tag: "in-progress",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date(),
    tag: "backlog",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date(),
    tag: "completed",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date(),
    tag: "overdue",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date(),
    tag: "trash",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date(),
    tag: "backlog",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date(),
    tag: "completed",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date(),
    tag: "overdue",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date(),
    tag: "in-progress",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date(),
    tag: "in-progress",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date(),
    tag: "in-progress",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date(),
    tag: "in-progress",
  },
];

const Todos = () => {
  const [todo, setTodo] = useState<TodoData[]>([]);

  useEffect(() => {
    setTodo(todoData);
    console.log(todoData);
  }, [todoData]);

  return (
    <StyledTodos>
      <StyledTodoMain>
        <Button text="Create Note" sm />

        <Sidebar />
        <StyledTodoArea>
          <Title text="All Todos">
            <Button text="Create Note" />
          </Title>
          {todoData.length > 1 ? (
            todoData.map((todo) => <Todo todo={todo} />)
          ) : (
            <div
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
            </div>
          )}
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
};

export default Todos;
