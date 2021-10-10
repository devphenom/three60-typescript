import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Todos from "../Todos/Todos";
import { StyledDashboard } from "./Dashboard.styles";

const ComingSoon = () => <div>This page is coming soon.</div>;
const Dashboard = () => {
  return (
    <StyledDashboard>
      <Navbar />
      <Switch>
        <Route exact path="/dashboard" component={Todos} />
        <Route path="/dashboard/links" component={ComingSoon} />
        <Route path="/dashboard/notes" component={ComingSoon} />
      </Switch>
    </StyledDashboard>
  );
};

export default Dashboard;
