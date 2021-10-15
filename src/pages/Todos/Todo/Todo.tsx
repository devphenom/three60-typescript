import React from "react";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import {
  faEdit,
  faSquare,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";

import { getCategory, getDate, getTime, capitalizeTag } from "./todoFunctions";
import { Icon } from "../../../components/Globals.styles";
import { StyledTodo } from "./Todo.styles";
import { TodoData } from "../Todos";

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
      <span id="tag">
        {capitalizeTag(todo.tag)}
        {/* {todo.tag.charAt(0).toUppercase() + todo.tag.slice(1)} */}
      </span>
      <button id="more">
        <Icon icon={faEllipsisH} color="black" />

        <div className="dropdown-content">
          <span className="dropdown-item">
            <Icon icon={faSquare} /> Mark as complete
          </span>
          <span className="dropdown-item">
            <Icon icon={faEdit} /> Edit
          </span>
          <span className="dropdown-item">
            <Icon icon={faTrashAlt} /> Delete
          </span>
        </div>
      </button>
    </StyledTodo>
  );
};

export default Todo;