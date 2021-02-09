import React from "react";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import DashboardAdmin from "./components/Admin/DashboardAdmin";
import DashboardStudent from "./components/Etudiant/DashboardStudent";
import PrivateRoute from "./components/Util/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/admin" component={DashboardAdmin} Role="ADMIN" />
        <PrivateRoute
          path="/student"
          component={DashboardStudent}
          Role="STUDENT"
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
