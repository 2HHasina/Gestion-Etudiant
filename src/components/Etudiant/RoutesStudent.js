import React, { Component } from "react";
import { withRouter, Redirect, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Home from "./Home";
import Reporting from "./Reporting";
import Service from "./Service";

class RoutesStudent extends Component {
  render() {
    var decode;
    if (localStorage.getItem("token")) {
      decode = jwt_decode(localStorage.getItem("token"));
      if (decode.roles[0] === "STUDENT")
        return (
          <Switch>
            <Route exact path="/student">
              <Redirect to="/student/home" />
            </Route>
            <Route path="/student/home" component={Home} />
            <Route path="/student/reporting" component={Reporting} />
            <Route path="/student/service" component={Service} />
          </Switch>
        );
      else {
        this.props.history.push("/");
        return null;
      }
    } else {
      this.props.history.push("/");
      return null;
    }
  }
}
export default withRouter(RoutesStudent);
