// import { GET_TASKS, NEW_TASK, DELETE_TASK } from "./types";
import { GET_TASKS } from "./types";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com",
  headers: {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJmMTRmZjcyZWY5ZjAwMTcyNDZkMTkiLCJsb2dpbiI6IkphbmUiLCJlbWFpbCI6InNvbWVAY29tLmNvbSIsImlhdCI6MTU4MzE4MjEyNH0.wdVf9ZhmMGoCAPFWfQHi6STTWLZ0NKR4cwdmx_Mj2iM"
  }
});

export const getTasks = () => dispatch => {
  axiosInstance
    .get("/api/tasks")
    .then(tasks => {
      console.log("GET ALL TASKS", tasks);
      dispatch({
        type: GET_TASKS,
        payload: tasks
      });
    })
    .catch(err => {
      console.log(err);
    });
};
