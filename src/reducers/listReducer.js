import { GET_LISTS } from "../actions/types";

const initState = {
  lists: [
    { id: 1, title: "title 1", content: "content 1" },
    { id: 2, title: "title 2", content: "content 2" },
    { id: 3, title: "title 3", content: "content 3" }
  ],
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
