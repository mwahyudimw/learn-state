import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../container/Login";
import Beranda from "../container/Beranda";

function Routes() {
  return (
    <div>
      <Router>
        <Route path="/beranda" component={Beranda}></Route>
        <Route exact path="/" component={Login}></Route>
      </Router>
    </div>
  );
}

export default Routes;
