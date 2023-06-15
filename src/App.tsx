import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { Remote01Routes } from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <h1>Container User Interface</h1>
      <HashRouter>
        <Remote01Routes />
        {/* <Remote02Routes /> */}
      </HashRouter>
    </div>
  );
}

export default App;
