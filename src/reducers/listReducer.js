import { GET_LISTS, NEW_LIST, DELETE_LIST } from "../actions/types";

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

    case NEW_LIST:
      return {
        ...state,
        list: action.payload
      };

    case DELETE_LIST:
      return {
        ...state,
        list: action.payload
      };

    default:
      return state;
  }
};

export default listReducer;
