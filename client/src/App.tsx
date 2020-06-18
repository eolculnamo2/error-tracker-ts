import React from "react";
import logo from "./logo.svg";
import styled, { createGlobalStyle } from "styled-components";
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

const Universal = createGlobalStyle`
  body {
    padding: 0;
    box-sizing: none;
    margin: 0;
    background-color: #999;
  }
`;

function App() {
  library.add(fab, faKey, faUserAlt);
  return (
    <div>
      <Login />
      <Universal />
    </div>
  );
}

export default App;
