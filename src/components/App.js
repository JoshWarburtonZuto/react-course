import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";

function App() {
  return (
    <div className="container-fluid">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;
