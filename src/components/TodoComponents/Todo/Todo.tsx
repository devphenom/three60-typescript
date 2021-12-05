import { getCategory, getDate, getTime, capitalizeTag } from "./todoFunctions";
// import { Icon } from "../../Globals.styles";
import { StyledTodo } from "./Todo.styles";
import { TodoData } from "../../../pages/Todos/Todos";
import {
  CompleteIcon,
  HamburgerIcon,
  PencilIcon,
  TrashIcon,
} from "../../Icons";

interface TodoProps {
  todo: TodoData;
}

const Todo = (props: TodoProps) => {
  const { todo } = props;
  return (
    <StyledTodo category={getCategory(todo.tag)}>
      <div id="todo">
        <p>{todo.name}</p>
        <p>{`Created on ${getDate(todo.date)} at ${getTime(todo.date)}`}</p>
      </div>
      <span id="tag">{capitalizeTag(todo.tag)}</span>
      <button id="more">
        <HamburgerIcon className="icon" />
        <div className="dropdown-content">
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
    </StyledTodo>
  );
};

export default Todo;
