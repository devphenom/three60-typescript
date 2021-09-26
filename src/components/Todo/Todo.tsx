import {
  faEdit,
  faSquare,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import Button from "../Button/Button";
import { Icon } from "../Globals.styles";
import { StyledTodo } from "./Todo.styles";

const Todo = () => {
  return (
    <StyledTodo>
      <div id="todo">
        <p>
          Create an endpoint to get the list of users available in the database
        </p>
        <p>Created on 13th July 2019 at 08:33am</p>
      </div>
      <span>In Progress</span>
      <button>
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
