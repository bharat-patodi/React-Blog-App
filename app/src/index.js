import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route exact path="/" component={App} />
      {/* <Route path="/login">
        <Login />
      </Route> */}
      {/* <Route path="/register">
        <Register />
      </Route> */}
    </Router>
    {/* <h1>Hi</h1> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
