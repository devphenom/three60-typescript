import React, { useEffect, useState } from "react";
import Sidebar from "../../components/TodoComponents/TodoSidebar/Sidebar";
import { StyledTodos, StyledTodoMain, StyledTodoArea } from "./Todos.styles";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Todo from "../../components/TodoComponents/Todo/Todo";
import noTodo from "./Group 3.png";
import TodoAside from "../../components/TodoComponents/TodoAside/TodoAside";

export interface TodoData {
  name: string;
  date: string;
  tag: string;
}

const todoData: TodoData[] = [
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "in-progress",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "backlog",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "completed",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "overdue",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "trash",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "backlog",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "completed",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "overdue",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "in-progress",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "in-progress",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "in-progress",
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "in-progress",
  },
];

const Todos = () => {
  const [todos, setTodos] = useState<TodoData[]>([]);

  useEffect(() => {
    setTodos(todoData);
    console.log(todoData);
  }, []);

  return (
    <StyledTodos>
      <StyledTodoMain>
        <Sidebar />
        <Button text="Create Note" sm />

        <StyledTodoArea>
          <Title text="All Todos">
            <Button text="Create Note" />
          </Title>
          {todos.length ? (
            todos.map((todo) => <Todo todo={todo} />)
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
        <TodoAside />
      </StyledTodoMain>
    </StyledTodos>
  );
};

export default Todos;
