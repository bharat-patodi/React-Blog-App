import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";
import NewArticle from "./components/NewArticle";
import FourOhFour from "./components/FourOhFour";
import SettingsPage from "./components/SettingsPage";
import Pagination from "./components/Pagination";
import User from "./components/User";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/page/:pageNum" component={Pagination} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/articles/new">
          <NewArticle />
        </Route>
        <Route path="/articles/:id" component={Article} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/user/:id" component={User} />
        <Route component={FourOhFour} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
