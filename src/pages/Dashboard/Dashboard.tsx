import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Todos/Sidebar/SIdebar";
import Todos from "../../components/Todos/Todos";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/dashboard" component={Todos} />
      </Switch>
      {/* <Sidebar /> */}
    </div>
  );
};

export default Dashboard;
