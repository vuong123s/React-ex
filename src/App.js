import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <header>
      <Router>
        <Route path="/" component={Header}></Route>
      </Router>
    </header>
  );
}

export default App;
