import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/signUp" component={SignUp}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
