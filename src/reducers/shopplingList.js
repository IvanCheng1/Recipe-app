import {
  ADD_SHOPPING_LIST,
  GET_SHOPPING_LIST,
  TOGGLE_SHOPPING_LIST,
  REMOVE_SHOPPING_LIST_ITEM,
  RECEIVE_EMPTY_SHOPPING_LIST,
} from "../actions/shoppingList";

export default function shoppingList(state = {}, action) {
  switch (action.type) {
    case ADD_SHOPPING_LIST:
      return {
        ...state,
        ...action.list,
      };
    case GET_SHOPPING_LIST:
      return {
        ...state,
        ...action.list,
      };
    case TOGGLE_SHOPPING_LIST:
      return {
        ...state,
        ...action.list,
      };
    case REMOVE_SHOPPING_LIST_ITEM:
      delete state[action.category][action.itemId];
      return {
        ...state,
      }
    case RECEIVE_EMPTY_SHOPPING_LIST:
      return {}
    default:
      return state;
  }
}
