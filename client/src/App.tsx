import React from "react";
import logo from "./logo.svg";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faKeybase, faKeycdn } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faUserCircle,
  faUserCheck,
  faUserAlt,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./components/Login";
import NewOrg from "./components/NewOrg";
import Dashboard from "./components/Dashboard";

const Universal = createGlobalStyle`
  body {
    padding: 0;
    box-sizing: none;
    margin: 0;
    background-color: #999;
    font-family: "Segoe UI";

    input {
      font-family: "Segoe UI";
    }
  }
`;

function App() {
  library.add(fab, faKey, faUserAlt);
  return (
    <Router>
      <Universal />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/neworganization" component={NewOrg} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
