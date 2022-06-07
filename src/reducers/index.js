import todoReducer from "./todoReducer";
import { combineReducers } from "redux";
import todoFilter from "./todoFilter";

export default combineReducers({
  todos: todoReducer,
  filter: todoFilter,
});
