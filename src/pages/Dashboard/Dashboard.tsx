import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Todos from "../Todos/Todos";
import { StyledDashboard } from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Navbar />
      <Switch>
        <Route path="/dashboard" component={Todos} />
      </Switch>
    </StyledDashboard>
  );
};

export default Dashboard;
