import React from "react";
import "antd/dist/antd.css";
import Dashboard from "./components/Etudiant/Dashboard";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Dashboard />  
    </BrowserRouter>
  );
}

export default App;
