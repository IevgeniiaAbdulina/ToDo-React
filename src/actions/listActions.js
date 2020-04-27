import { GET_LISTS, NEW_LIST, DELETE_LIST } from "./types";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com",
  headers: {
    "x-auth-token": localStorage.getItem("token"),
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

export const createList = (listData) => (dispatch) => {
  axiosInstance
    .post("/api/lists", {
      name: listData,
    })
    .then((list) => {
      dispatch({
        type: NEW_LIST,
        payload: list,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteList = (listID) => (dispatch) => {
  axiosInstance.delete("/api/lists/" + listID).then((list) => {
    dispatch({
      type: DELETE_LIST,
      payload: list,
    }).catch((err) => {
      console.log(err);
    });
  });
};
