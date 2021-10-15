import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Todos from "../Todos/Todos";
import { StyledDashboard } from "./Dashboard.styles";

const ComingSoon = () => <div>This page is coming soon.</div>;
const Dashboard = () => {
  const { url } = useRouteMatch();
  return (
    <StyledDashboard>
      <Navbar />
      <Switch>
        <Route exact path={`${url}`} component={Todos} />
        <Route exact path={`${url}/todos`} component={Todos} />
        <Route path={`${url}/links`} component={ComingSoon} />
        <Route path={`${url}/notes`} component={ComingSoon} />
      </Switch>
    </StyledDashboard>
  );
};

export default Dashboard;
