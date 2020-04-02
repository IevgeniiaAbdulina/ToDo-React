import { SIGN_UP, SIGN_UP_ERROR } from "./types";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com"
});

export const signUp = credentials => dispatch => {
  console.log(credentials.userEmail);
  axiosInstance
    .post("/api/users", {
      login: credentials.userName,
      email: credentials.userEmail,
      password: credentials.userPassword
    })
    .then(signup => {
      console.log("SIGNUP RES", signup);
      dispatch({
        type: SIGN_UP,
        payload: signup.data
      });
    })
    .catch(err => {
      console.log(err);
      console.log(SIGN_UP_ERROR);

      dispatch({
        type: SIGN_UP_ERROR
      });
    });
};
