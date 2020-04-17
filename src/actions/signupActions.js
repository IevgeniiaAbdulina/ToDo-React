import { SIGN_UP, SIGN_UP_ERROR, SPINNER_ON, SPINNER_OFF } from "./types";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com",
});

export const signUp = (credentials) => (dispatch) => {
  dispatch({
    type: SPINNER_ON,
  });
  axiosInstance
    .post("/api/users", {
      login: credentials.userName,
      email: credentials.userEmail,
      password: credentials.userPassword,
    })
    .then((signup) => {
      console.log("SIGNUP RES", signup);
      dispatch({
        type: SIGN_UP,
        payload: signup.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SIGN_UP_ERROR,
      });
    })
    .then(() => {
      dispatch({
        type: SPINNER_OFF,
      });
    });
};
