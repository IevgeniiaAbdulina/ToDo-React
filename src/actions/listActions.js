import { GET_LISTS } from "./types";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com"
  // headers: { "x-auth-token": "token" }
});

export const getLists = () => dispatch => {
  axiosInstance
    .get("/api/lists")
    .then(lists => {
      console.log("GET LISTS", lists);
      dispatch({
        type: GET_LISTS,
        payload: lists
      });
    })
    .catch(err => {
      console.log(err);
    });
};
