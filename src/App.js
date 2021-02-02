import React from "react";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/auth/SignIn"
import NavBar from "./components/Navbar/NavBar"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SignIn />
      
    </BrowserRouter>
  );
}

export default App;
