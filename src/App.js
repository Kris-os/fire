import React, { useState } from "react";
import OneOffModelling from "./components/OneOffModelling";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
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
          <Route
            path="/"
            exact
            render={() => <Homepage setActivePage={setActivePage} />}
          />
          <Route
            path="/home"
            render={() => <Homepage setActivePage={setActivePage} />}
          />
          <Route
            path={"/" + consts.oneOffModellingPageId}
            component={OneOffModelling}
          />
          <Route path={"/" + consts.aboutPageId} component={AboutPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
