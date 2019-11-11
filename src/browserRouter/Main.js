import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Table from "./Table";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Table" component={Table} />
  </Switch>
);

export default Main;
