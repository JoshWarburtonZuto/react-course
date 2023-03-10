import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="jumbotron">
    <h1>Pluralsight Administration</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lrg">
      Learn more
    </Link>

    <div className="col-md-12">
      <div className="col-md-6">
        <p>Hello 1</p>
      </div>

      <div className="col-md-6">
        <p>Hello 2</p>
      </div>
    </div>
  </div>
);

export default Home;
