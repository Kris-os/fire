import React, { useState } from "react";
import Toolkit from "./components/Toolkit";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import "./styles/app.scss";
import { HashRouter, Switch, Route } from "react-router-dom";
import * as consts from "./Constants.js";

function App() {
  const [activePage, setActivePage] = useState(consts.homePageId);

  return (
    <HashRouter basename="/">
      <div className="App">
        <Header activePage={activePage} setActivePage={setActivePage} />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/toolkit" component={Toolkit} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
