import {
  SIGN_UP,
  SIGN_UP_ERROR,
  SPINNER_ON,
  SPINNER_OFF,
} from "../actions/types";

const initState = {
  signupError: null,
  signup: "",
  loadingSpinner: false,
};

const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case SPINNER_ON:
      return {
        ...state,
        loadingSpinner: true,
      };
    case SPINNER_OFF:
      return {
        ...state,
        loadingSpinner: false,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        signupError: "Sign un failed!",
      };

    case SIGN_UP:
      return {
        ...state,
        signupError: null,
        signup:
          "Congratulation! You have been successfully registered. Please log in to start.",
      };

    default:
      return state;
  }
};

export default signupReducer;
