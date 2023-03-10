import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Header from "./common/Header"

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
