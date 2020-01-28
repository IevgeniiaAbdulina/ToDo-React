import React from "react";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import ListsShow from "./components/ListsShow";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/user"} component={ListsShow} />
          <Route exact path="*" component={() => "404 PAGE NOT FOUND"} />
        </Switch>
      </div>
    );
  }
}

export default App;

// @media https://reacttraining.com/react-router/core/guides/philosophy
