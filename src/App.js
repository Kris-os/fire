import React from "react";
import Model from "./components/Model";
import Header from "./components/Header";
import Intro from "./components/Intro";
import "./custom.scss";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/model" component={Model} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
