import React from "react";

import DashboardAdmin from "./components/Admin/DashboardAdmin"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <DashboardAdmin />
    </BrowserRouter>
  );
}

export default App;
