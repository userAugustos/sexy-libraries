/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable global-require */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.scss";

if (process.env.NODE_ENV === "development") {
  // You can't use import in a conditional so we're using require() so no
  // Mirage JS code will ever reach your production build.
  require("./miragejs/server").makeServer();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
