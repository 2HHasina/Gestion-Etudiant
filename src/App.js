import React from "react";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import DashboardAdmin from "./components/Admin/DashboardAdmin";
import DashBoardProf from "./components/Professor/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/admin" component={DashboardAdmin} />
        <Route path="/prof" component={DashBoardProf} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
