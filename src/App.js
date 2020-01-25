import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import ListsShow from './components/ListsShow';


class App extends React.Component {
   
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path={"/"} component={Home} />
            <Route path={"/user"} component={ListsShow} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
