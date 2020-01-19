import React from "react";
// import { Container, Row, Col } from "reactstrap";

import Header from "./components/header/Header";
import ListsTable from "./components/lists/ListsTable";

import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/jquery/dist/jquery.min.js";b
// import '../node_modules/bootstrap/dist/js/'

// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://cc19todoapp.herokuapp.com"
// });

class App extends React.Component {
  state = {
    _id: "",
    lists: []
  };

  componentDidMount() {
    // axiosInstance
    //   .get("/api/users/me")
    //   .then(res => console.log(res.data))
    //   .then(res => this.setState({ userID: res.data }));
  }

  render() {
    return (
      <div className="body-app">
        <header>
          <Header />
        </header>
        <div className="container-fluid">
          <div className="row flex-xl-nowrap">
            <div className="col-12 col-md-3 col-xl-2">
              Button
              <button className="">Add List</button>
            </div>
            <main className="col-12 col-md-9 col-xl-8" role="main">
              <ListsTable />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// npm start
