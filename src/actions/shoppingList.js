import { getShoppingListAsync, addShoppingListAsync } from "../utils/api";

export const ADD_SHOPPING_LIST = "ADD_SHOPPING_LIST";
export const GET_SHOPPING_LIST = "GET_SHOPPING_LIST";

function addShopping(list) {
  return {
    type: ADD_SHOPPING_LIST,
    list,
  };
}

export function handleAddShopping(list) {
  return (dispatch) => {
    return addShoppingListAsync(list).then((list) => {
      dispatch(addShopping(list));
    });
  };
}

function receiveShopping(list) {
  return {
    type: GET_SHOPPING_LIST,
    list,
  };
}

export function handleGetShopping() {
  return (dispatch) => {
    return getShoppingListAsync().then((list) => {
      dispatch(receiveShopping(list));
    });
  };
}
