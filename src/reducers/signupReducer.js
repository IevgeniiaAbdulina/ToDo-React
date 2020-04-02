import { SIGN_UP, SIGN_UP_ERROR } from "../actions/types";

const initState = {
  signupError: null,
  signup: ""
};

const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_UP_ERROR:
      return {
        ...state,
        signupError: "Sign un failed!"
      };

    case SIGN_UP:
      return {
        ...state,
        signupError: null,
        signup:
          "Congratulation! You have been successfully registered. Please log in to start."
      };

    default:
      return state;
  }
};

export default signupReducer;
