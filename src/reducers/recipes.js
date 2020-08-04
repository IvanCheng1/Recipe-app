import {
  RECEIVE_RECIPES,
  CREATE_RECIPES,
  REMOVE_RECIPES,
} from "../actions/recipes";

export default function recipes(state = {}, action) {
  switch (action.type) {
    case RECEIVE_RECIPES:
      return {
        ...state,
        ...action.recipes,
      };
    default:
      return state;
  }
}
