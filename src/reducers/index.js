import { combineReducers } from "redux";
import recipes from "./recipes";
import shoppingList from "./shopplingList"
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  recipes,
  shoppingList,
  loadingBarReducer,
});
