import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Home from "./Home/Home";
import Student from "../Pages/Student/Student";
import Index from "./API/Index";

const index = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Switch>
            <Route path="/api" component={Index} />
            <Route path="/student" component={Student} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default index;
