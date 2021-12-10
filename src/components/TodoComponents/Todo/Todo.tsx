import { getCategory, getDate, getTime, capitalizeTag } from "./todoFunctions";
// import { Icon } from "../../Globals.styles";
import { StyledTodo } from "./Todo.styles";
import { TodoData } from "../../../pages/Todos/Todos";
import { CompleteIcon, HamburgerIcon, PencilIcon, TrashIcon } from "../../Icons";
import { useState } from "react";

interface TodoProps {
  todo: TodoData;
}

const TodoDropdown = (props: any) => (
  <button id="more" onClick={props.handleClick}>
    <HamburgerIcon className="icon" />
    <div className={`dropdown-content`} style={{ display: props.todoMore === props._id ? "block" : "none" }}>
      <span className="dropdown-item">
        <CompleteIcon />
        <span> Mark as complete</span>
      </span>
      <span className="dropdown-item">
        <PencilIcon />
        <span>Edit</span>
      </span>
      <span className="dropdown-item">
        <TrashIcon />
        <span>Delete</span>
      </span>
    </div>
  </button>
);

const Todo = (props: TodoProps) => {
  const [todoMore, setTodoMore] = useState(0);
  const handleToggleMore = () => setTodoMore(todo.id);
  const { todo } = props;
  return (
    <StyledTodo category={getCategory(todo.tag)} todoMore={todoMore} _id={todo.id}>
      <div id="todo">
        <p>{todo.name}</p>
        <p>{`Created on ${getDate(todo.date)} at ${getTime(todo.date)}`}</p>
      </div>
      <span id="tag">{capitalizeTag(todo.tag)}</span>
      <TodoDropdown handleClick={handleToggleMore} todoMore={todoMore} id={todo.id} />
    </StyledTodo>
  );
};

export default Todo;
