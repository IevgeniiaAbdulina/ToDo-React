const INIT_STATE = {
  isSignedIn: null
};

const authReducer = (state = { INIT_STATE }, action) => {
  console.log("authReducer, ", state);
  return state;
};

export default authReducer;
