import "./App.css";
import React from "react";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute" }}></div>
      <Home />
    </div>
  );
};

export default App;
