import { GET_TASKS, SHOW_ACTIVE_TASKS } from "./types";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com",
  headers: {
    "x-auth-token": localStorage.getItem("token"),
  },
});

export const getTasks = () => (dispatch) => {
  axiosInstance
    .get("/api/tasks", {
      listID: "5e7d37f31d5f4b0017f4e5a7",
    })
    .then((tasks) => {
      dispatch({
        type: GET_TASKS,
        payload: tasks,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const visibilityFilter = (tasks) => (dispatch) => {
  dispatch({
    type: SHOW_ACTIVE_TASKS,
    payload: tasks,
    checked: false,
  });
};
