import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/tv" exact component={TV}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/movie/:id" component={Detail}></Route>
        <Route path="/show/:id" component={Detail}></Route>

        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
