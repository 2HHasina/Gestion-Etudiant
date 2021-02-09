import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

const PrivateRoute = ({ component: Component, Role: Role, ...rest }) => {
  let role = localStorage.getItem("role");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!role) {
          props.history.push("/");
        } else if (Role === role) return <Component {...props} />;
        else props.history.push(`/${Role.toLowerCase()}`);
      }}
    />
  );
};

export default withRouter(PrivateRoute);
