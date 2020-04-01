import {
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_OUT,
  IS_SIGNED_IN
} from "../actions/types";

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
        isSignedIn: ""
      };

    case IS_SIGNED_IN:
      return {
        ...state,
        isSignedIn: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
