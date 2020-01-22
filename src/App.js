import React from "react";

import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/views/Home";
import UserPage from "./components/views/UserPage";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/user"} component={UserPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
