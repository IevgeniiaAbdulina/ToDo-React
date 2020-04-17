import {
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_OUT,
  IS_SIGNED_IN,
  SPINNER_ON,
  SPINNER_OFF,
} from "./types";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com",
});

export const signIn = (credentials) => (dispatch) => {
  dispatch({
    type: SPINNER_ON,
  });
  axiosInstance
    .post("/api/auth", {
      email: credentials.userEmail,
      password: credentials.userPassword,
    })
    .then((auth) => {
      localStorage.setItem("login", auth.data.login);
      localStorage.setItem("token", auth.data.token);
      dispatch({
        type: SIGN_IN,
        payload: auth.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SIGN_IN_ERROR,
      });
    })
    .then(() => {
      dispatch({
        type: SPINNER_OFF,
      });
    });
};

export const signOut = () => {
  localStorage.removeItem("login");
  localStorage.removeItem("token");
  return {
    type: SIGN_OUT,
  };
};

export const setSignedIn = () => {
  const token = localStorage.getItem("token");
  return {
    type: IS_SIGNED_IN,
    payload: token,
  };
};
