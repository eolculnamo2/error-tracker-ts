import React from "react";
import logo from "./logo.svg";
import styled, { createGlobalStyle } from "styled-components";
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
  return (
    <div>
      <Login />
      <Universal />
    </div>
  );
}

export default App;
