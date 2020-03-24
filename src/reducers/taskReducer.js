import { GET_TASKS } from "../actions/types";

const initSate = {
  tasks: [],
  task: {}
};

const taskReducer = (state = initSate, action) => {
  console.log("taskReducer: ", state);
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload.data
      };
    default:
      return state;
  }
};

export default taskReducer;
