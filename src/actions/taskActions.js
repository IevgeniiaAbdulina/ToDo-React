import { GET_TASKS, SHOW_ACTIVE_TASKS } from "./types";

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
    .get("/api/tasks", {
      listID: "5e7a53719b60e50017478d12"
    })
    .then(tasks => {
      // console.log("GET ALL TASKS", tasks);
      dispatch({
        type: GET_TASKS,
        payload: tasks
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const visibilityFilter = tasks => dispatch => {
  // console.log("ACTIVE TASKS: ", tasks);
  dispatch({
    type: SHOW_ACTIVE_TASKS,
    payload: tasks,
    checked: false
  });
};
// SHOW_COMPLETED_TASKS
// TOGGLE_TASK
// ADD_TASK
