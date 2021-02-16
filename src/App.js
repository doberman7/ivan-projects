import "./App.css";
import React from "react";
import Home from "./components/Home";
import Particles from "react-particles-js";
import particlesConfig from "./components/config/particlesConfig";

const App = () => {
  return (
    <div className="App" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute" }}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <Home />
    </div>
  );
};

export default App;
