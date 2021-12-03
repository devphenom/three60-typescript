import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { getUsers } from "../../utils/utils";
import Todos from "../Todos/Todos";
import { StyledDashboard } from "./Dashboard.styles";

const ComingSoon = () => <div>This page is coming soon.</div>;
const Dashboard = () => {
  const [loading, setloading] = useState(true);
  const { url } = useRouteMatch();
  const history = useHistory();
  useEffect(() => {
    const { tk, user } = getUsers();
    console.log(tk, user);
    if (Object.keys(user).length && tk) {
      setloading(false);
    } else {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StyledDashboard>
      <Navbar />
      {loading ? (
        <> loading </>
      ) : (
        <Switch>
          <Route exact path={`${url}`} component={Todos} />
          <Route exact path={`${url}/todos`} component={Todos} />
          <Route path={`${url}/links`} component={ComingSoon} />
          <Route path={`${url}/notes`} component={ComingSoon} />
        </Switch>
      )}
    </StyledDashboard>
  );
};

export default Dashboard;
