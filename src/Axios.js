import React, { useState } from "react";
import Header from "./components/Header";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com"
});

const Axios = props => {
  const [isUserIn, setIsUserIn] = useState(false);

  const postUserLogin = (emailUser, passwordUser) => {
    // console.log("axiosPOST: CALLED");

    axiosInstance
      .post("/api/auth", {
        email: emailUser,
        password: passwordUser
      })
      .then(res => {
        // console.log("axiosPOST: RESPONSE");
        localStorage.setItem("login", res.data.login);
        localStorage.setItem("token", res.data.token);
        setIsUserIn(true);
        // console.log(isUserIn);
      })
      .catch(err => {
        console.log(err, err.res);
        setIsUserIn(false);
      });
  };

  return (
    <>
      <Header handleUser={postUserLogin} />

      {/* <Header funcFromApp={props.onLoginRequested} handleUser={postUserLogin} /> */}
    </>
  );
};

export default Axios;
