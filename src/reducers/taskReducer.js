import { GET_TASKS, SHOW_ACTIVE_TASKS } from "../actions/types";

const initSate = {
  tasks: [],
  task: {},
};

const taskReducer = (state = initSate, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload.data,
      };

    case SHOW_ACTIVE_TASKS:
      return {
        ...state,
        tasks: action.payload.data,
        checked: false,
      };

    default:
      return state;
  }
};

export default taskReducer;
