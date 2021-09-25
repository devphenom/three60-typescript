import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Todos from "./pages/Todos/Todos";
import { StyledDashboard } from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Navbar />
      <Switch>
        <Route path="/dashboard" component={Todos} />
      </Switch>
      {/* <Sidebar /> */}
    </StyledDashboard>
  );
};

export default Dashboard;
