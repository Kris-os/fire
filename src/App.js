import React, { Component } from "react";
import Model from "./components/Model";
import Header from "./components/Header";
import Intro from "./components/Intro";
import "./custom.scss";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Intro} />
            <Route path="/model" component={Model} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function encodeQueryData(data) {
  const output = [];
  for (let d in data)
    output.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
  return output.join("&");
}

export default App;
