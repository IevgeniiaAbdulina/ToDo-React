import { GET_LISTS } from "../actions/types";

const initState = {
  lists: [],
  list: {}
};

const listReducer = (state = initState, action) => {
  console.log("listReducer: ", state);
  switch (action.type) {
    case GET_LISTS:
      return {
        ...state,
        lists: action.payload.data
      };
    default:
      return state;
  }
};

export default listReducer;
