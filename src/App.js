import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// NEW REDUX PROJECT
import Dashboard from "./components/dashboard/Dashboard";
import NavbarApp from "./components/layout/NavbarApp";
import ListDetails from "./components/lists/ListDetails";
import TaskDetails from "./components/tasks/TaskDetails";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import CreateList from "./components/lists/CreateList";
import CreateTask from "./components/tasks/CreateTask";

// import Axios from "./Axios";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import ListsShow from "./components/ListsShow";
// import LoginPage from "./components/LoginPage";

class App extends React.Component {
  // onLoginRequested() {
  //   console.log("Login button has been clicked = App");
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Axios /> */}
          {/* <Axios onLoginRequested={this.onLoginRequested} /> */}
          {/* <Header onLoginRequested={this.onLoginRequested} /> */}

          <NavbarApp />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/list/:id" component={ListDetails} />
            <Route path="/task/:id" component={TaskDetails} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/create/list" component={CreateList} />
            <Route path="/create/task" component={CreateTask} />

            {/* <Route path={"/"} component={Home} /> */}
            {/* <Route path={"/login"} component={LoginPage} /> */}
            {/* <Route path={"/user"} component={ListsShow} /> */}
            <Route path="*" component={() => "404 PAGE NOT FOUND"} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
