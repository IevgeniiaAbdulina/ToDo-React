import { SIGN_IN, SIGN_IN_ERROR, SIGN_OUT } from "../actions/types";

const initState = {
  authError: null,
  isSignedIn: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN_ERROR:
      return {
        ...state,
        authError: "SIgn IN failed"
      };
    case SIGN_IN:
      return {
        ...state,
        authError: null,
        isSignedIn: true
      };
    case SIGN_OUT:
      console.log("SIGN OUT success");
      return state;

    default:
      return state;
  }
};

export default authReducer;
