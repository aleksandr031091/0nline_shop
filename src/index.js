import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Normalize } from "styled-normalize";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Normalize />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
