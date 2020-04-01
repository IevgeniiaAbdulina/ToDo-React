import { SIGN_IN, SIGN_IN_ERROR, SIGN_OUT } from "../actions/types";

const initState = {
  authError: null,
  isSignedIn: ""
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN_ERROR:
      return {
        ...state,
        authError: "Sign in failed!"
      };
    case SIGN_IN:
      return {
        ...state,
        authError: null,
        isSignedIn: action.payload.token
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: "You are not signed in!"
      };

    default:
      return state;
  }
};

export default authReducer;
