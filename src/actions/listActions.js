import { GET_LISTS, NEW_LIST, DELETE_LIST } from "./types";

import axios from "axios";
// const token = localStorage.getItem("token");
// console.log(token);

const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com",
  // headers: { "x-auth-token": `${localStorage.getItem("token")}` },
  // auth: set localStorage > get LocalStorage "token"
  // localStorage.setItem("login", res.dta.login);
  // localStorage.setItem("token", res.dta.token);
  headers: {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg2MTMwN2FhZTI3MTAwMTcwN2MwYjQiLCJsb2dpbiI6Im5hbWU4IiwiZW1haWwiOiJuYW1lOEBuYW1lLnVrIiwiaWF0IjoxNTg3MTUxNzgwfQ.L80FKVGlhvofW-CKMeVluRH5S6GvTW5jIu6JWQPlCDE",
  },
});

export const getLists = () => (dispatch) => {
  axiosInstance
    .get("/api/lists")
    .then((lists) => {
      dispatch({
        type: GET_LISTS,
        payload: lists,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createList = (listData, callback) => (dispatch) => {
  axiosInstance
    .post("/api/lists", {
      name: listData,
    })
    .then((list) => {
      // console.log("CREATE NEW LIST");
      dispatch({
        type: NEW_LIST,
        payload: list,
      });
      if (callback !== undefined) {
        callback();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteList = (listID) => (dispatch) => {
  axiosInstance.delete("/api/lists/" + listID).then((list) => {
    // console.log("DELETE LIST", list);
    dispatch({
      type: DELETE_LIST,
      payload: list,
    }).catch((err) => {
      console.log(err);
    });
  });
};
