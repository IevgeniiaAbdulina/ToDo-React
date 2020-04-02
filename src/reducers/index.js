import { combineReducers } from "redux";
import authReducer from "./authReducer";
import signupReducer from "./signupReducer";
import listReducer from "./listReducer";
import taskReducer from "./taskReducer";

export default combineReducers({
  auth: authReducer,
  signupState: signupReducer,
  listsState: listReducer,
  tasksState: taskReducer
});
