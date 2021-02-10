import React from "react";
import { Route, withRouter } from "react-router-dom";

const PrivateRoute = ({ component: Component, Role: Role, ...rest }) => {
  let role = localStorage.getItem("role");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (role && Role === role) {
          return <Component {...props} />
          
        } else if (Role === role) return props.history.push("/");
          return props.history.push('/forbidden');
      }}
    />
  );
};

export default withRouter(PrivateRoute);
