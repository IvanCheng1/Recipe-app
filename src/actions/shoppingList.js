import {
  getShoppingListAsync,
  addShoppingListAsync,
  toggleCheckShoppingListAsync,
  deleteShoppingListItemAsync,
  addItemShoppingListAsync,
  clearShoppingListAsync,
} from "../utils/api";

export const ADD_SHOPPING_LIST = "ADD_SHOPPING_LIST";
export const ADD_ITEM_SHOPPING_LIST = "ADD_ITEM_SHOPPING_LIST";
export const GET_SHOPPING_LIST = "GET_SHOPPING_LIST";
export const TOGGLE_SHOPPING_LIST = "TOGGLE_SHOPPING_LIST";
export const REMOVE_SHOPPING_LIST_ITEM = "REMOVE_SHOPPING_LIST_ITEM";
export const RECEIVE_EMPTY_SHOPPING_LIST = "RECEIVE_EMPTY_SHOPPING_LIST";

function addShopping(list) {
  return {
    type: ADD_SHOPPING_LIST,
    list,
  };
}

export function handleAddShopping(list, title) {
  return (dispatch) => {
    return addShoppingListAsync(list, title).then((list) => {
      dispatch(addShopping(list));
    });
  };
}

export function handleAddItemShopping(item, quantity, category) {
  return (dispatch) => {
    return addItemShoppingListAsync(item, quantity, category).then((list) => {
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

function toggleShoppingListItem(list) {
  return {
    type: TOGGLE_SHOPPING_LIST,
    list,
  };
}

export function handleToggleCheckShopping(category, itemId) {
  return (dispatch) => {
    return toggleCheckShoppingListAsync(category, itemId).then((list) => {
      dispatch(toggleShoppingListItem(list));
    });
  };
}

function removeShoppingListItem(category, itemId) {
  return {
    type: REMOVE_SHOPPING_LIST_ITEM,
    category,
    itemId,
  };
}

export function handleDeleteShoppingListItem(category, itemId) {
  return (dispatch) => {
    return deleteShoppingListItemAsync(category, itemId).then(() => {
      dispatch(removeShoppingListItem(category, itemId));
    });
  };
}

function receiveEmptyShoppingList() {
  return {
    type: RECEIVE_EMPTY_SHOPPING_LIST,
  };
}

export function handleClearShoppingList() {
  return (dispatch) => {
    return clearShoppingListAsync().then(() => {
      dispatch(receiveEmptyShoppingList());
    });
  };
}
