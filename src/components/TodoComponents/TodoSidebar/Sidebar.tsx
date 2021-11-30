import React from "react";
import { StyledSidebar } from "./Sidebar.styles";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <ul id="sidebar-links">
        <li className="nav-item">
          <p>All Todos</p>
          <p className="number">0</p>
        </li>
        <li className="nav-item">
          <span>Backlog</span>
          <span className="number">0</span>
        </li>
        <li className="nav-item">
          <span>In Progress</span>
          <span className="number">0</span>
        </li>
        <li className="nav-item">
          <span>Finished</span>
          <span className="number">0</span>
        </li>
        <li className="nav-item">
          <span>Overdue</span>
          <span className="number">0</span>
        </li>
        <li className="nav-item">
          <span>Trash</span>
          <span className="number">0</span>
        </li>
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;