import { ADD_SHOPPING_LIST, GET_SHOPPING_LIST } from "../actions/shoppingList";

export default function shoppingList(state = {}, action) {
  switch (action.type) {
    case ADD_SHOPPING_LIST:
      // console.log("\n\n\n\nHERE\n\n\n\n",action)
      return {
        ...state,
        ...action.list,
      };
    case GET_SHOPPING_LIST:
      // console.log("\n\n\n\nHERE\n\n\n\n",action)
      return {
        ...state,
        ...action.list,
      };
    default:
      return state;
  }
}
