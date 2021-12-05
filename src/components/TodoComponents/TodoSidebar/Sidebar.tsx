import { StyledSidebar } from "./Sidebar.styles";

const Sidebar = () => {
  return (
    <StyledSidebar>
      {/* <ul id="sidebar-links"> */}
      <li className="nav-item">
        <span className="number">0</span>
        <span>All Todos</span>
      </li>
      <li className="nav-item">
        <span className="number">0</span>
        <span>Backlog</span>
      </li>
      <li className="nav-item">
        <span className="number">0</span>
        <span>In Progress</span>
      </li>
      <li className="nav-item">
        <span className="number">0</span>
        <span>Finished</span>
      </li>
      <li className="nav-item">
        <span className="number">0</span>
        <span>Overdue</span>
      </li>
      <li className="nav-item">
        <span className="number">0</span>
        <span>Trash</span>
      </li>
      {/* </ul> */}
    </StyledSidebar>
  );
};

export default Sidebar;
