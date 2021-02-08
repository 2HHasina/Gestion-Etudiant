import React from "react";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import DashboardAdmin from "./components/Admin/DashboardAdmin";

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
