import {
  GET_LISTS,
  NEW_LIST
  // DELETE_LIST
} from "./types";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com",
  // headers: { "x-auth-token": "token" }
  headers: {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJmMTRmZjcyZWY5ZjAwMTcyNDZkMTkiLCJsb2dpbiI6IkphbmUiLCJlbWFpbCI6InNvbWVAY29tLmNvbSIsImlhdCI6MTU4MzE4MjEyNH0.wdVf9ZhmMGoCAPFWfQHi6STTWLZ0NKR4cwdmx_Mj2iM"
  }
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

export const createList = listData => dispatch => {
  axiosInstance
    .post("/api/lists", {
      name: listData.listName
    })
    .them(list => {
      console.log("CREATE NEW LIST", list);
      dispatch({
        type: NEW_LIST,
        payload: list
      });
    })
    .catch(err => {
      console.log(err);
    });
};
