import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listReducer from "./listReducer";
import taskReducer from "./taskReducer";

export default combineReducers({
  auth: authReducer,
  listsState: listReducer,
  tasksState: taskReducer
});
