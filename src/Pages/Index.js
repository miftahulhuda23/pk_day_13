import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Home from "./Home/Home";
import Student from "../Pages/Student/Student";
import API from "../Pages/API/API";

const Index = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Switch>
            <Route path="/student" component={Student} />
            <Route path="/API" component={API} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Index;
