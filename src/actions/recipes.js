import { getRecipes } from "../utils/api";

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const CREATE_RECIPES = "CREATE_RECIPES";
export const REMOVE_RECIPES = "REMOVE_RECIPES";

function receiveRecipes(recipes) {
  return {
    type: RECEIVE_RECIPES,
    recipes,
  };
}

export function handleReceiveRecipes() {
  return (dispatch) => {
    return getRecipes().then((recipes) => {
      dispatch(receiveRecipes(recipes));
    });
  };
}

function createRecipes(recipe, recipeId) {
  return {
    type: CREATE_RECIPES,
    recipe,
    recipeId,
  };
}

export function handleCreateRecipes(recipe, recipeId) {
  return (dispatch) => {
    return dispatch(createRecipes(recipe, recipeId));
  };
}
