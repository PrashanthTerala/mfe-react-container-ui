import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { ContainerRoutes, Remote01Routes } from "./routes/AppRoutes";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HashRouter>
        <ContainerRoutes />
        <Remote01Routes />
        {/* <Remote02Routes /> */}
      </HashRouter>
    </div>
  );
}

export default App;
