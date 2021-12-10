import { useEffect, useState } from "react";
import Sidebar from "../../components/TodoComponents/TodoSidebar/Sidebar";
import { StyledTodos, StyledTodoArea, TodoButton } from "./Todos.styles";
// import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Todo from "../../components/TodoComponents/Todo/Todo";
import noTodo from "./Group 3.png";
import TodoAside from "../../components/TodoComponents/TodoAside/TodoAside";
import Modal from "../../components/TodoComponents/Modal/Modal";
import { PlusCircleIcon } from "../../components/Icons";

export interface TodoData {
  name: string;
  date: string;
  tag: string;
  id: number;
}

const todoData: TodoData[] = [
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "in-progress",
    id: 1,
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "backlog",
    id: 2,
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "completed",
    id: 3,
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "overdue",
    id: 4,
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "trash",
    id: 5,
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "backlog",
    id: 6,
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "completed",
    id: 7,
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "overdue",
    id: 8,
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "in-progress",
    id: 9,
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "in-progress",
    id: 10,
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "in-progress",
    id: 11,
  },
  {
    name: "Create an endpoint to get the list of users available in the database",
    date: new Date().toDateString(),
    tag: "in-progress",
    id: 12,
  },
];

const Todos = () => {
  const [todos, setTodos] = useState<TodoData[]>([]);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setTodos(todoData);
    console.log(todoData);
  }, []);

  return (
    <StyledTodos>
      <TodoButton
        text="Create Note"
        icon={<PlusCircleIcon className="icon" />}
      />
      <Sidebar />
      <StyledTodoArea>
        <Title text="All Todos"></Title>
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
      {/* <TodoAside />
      {modal ? (
        <Modal>
          <div>
            <h1>Modal Opened</h1>
          </div>
        </Modal>
      ) : null} */}
    </StyledTodos>
  );
};

export default Todos;
