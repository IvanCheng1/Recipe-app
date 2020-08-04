import { combineReducers } from "redux";
import recipes from "./recipes";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  recipes,
  loadingBarReducer,
});
