import {
  GET_TASKS,
  SHOW_ACTIVE_TASKS
  // SHOW_COMPLETED_TASKS,
  // TOGGLE_TASK
} from "../actions/types";

const initSate = {
  tasks: [],
  task: {}
};

const taskReducer = (state = initSate, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload.data
      };

    case SHOW_ACTIVE_TASKS:
      return {
        ...state,
        tasks: action.payload.data,
        checked: false
      };

    // case SHOW_COMPLETED_TASKS:
    //   return {
    //     ...state,
    //     tasks: action.payload.data,
    //     checked: true
    //   };

    // case TOGGLE_TASK:
    //   return {
    //     ...state,
    //     tasks: action.payload.data,
    //     checked: !action.payload.data.checked
    //   };

    default:
      return state;
  }
};

export default taskReducer;
