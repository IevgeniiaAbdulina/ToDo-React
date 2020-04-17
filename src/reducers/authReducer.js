import {
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_OUT,
  IS_SIGNED_IN,
  SPINNER_ON,
  SPINNER_OFF,
} from "../actions/types";

const initState = {
  authError: null,
  isSignedIn: "",
  loadingSpinner: false,
};

const authReducer = (state = initState, action) => {
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
    case SIGN_IN_ERROR:
      return {
        ...state,
        authError:
          "Sorry your email or password was incorrect! Please try again.",
      };
    case SIGN_IN:
      return {
        ...state,
        authError: null,
        isSignedIn: action.payload.token,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: "",
      };

    case IS_SIGNED_IN:
      return {
        ...state,
        isSignedIn: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
