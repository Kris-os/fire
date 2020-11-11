import React from "react";
import Model from "./components/Model";
import Header from "./components/Header";
import Intro from "./components/Intro";
import "./custom.scss";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/intro" exact component={Intro} />
          <Route path="/model" component={Model} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
