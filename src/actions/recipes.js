import { getRecipesAsync, addRecipeAsync, deleteRecipeAsync } from "../utils/api";

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
    return getRecipesAsync().then((recipes) => {
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
    return addRecipeAsync(recipe, recipeId).then(() => {
      dispatch(createRecipes(recipe, recipeId));
    });
  };
}

function deleteRecipes(recipeId) {
  return {
    type: REMOVE_RECIPES,
    recipeId,
  };
}

export function handleDeleteRecipes(recipeId) {
  return (dispatch) => {
    return deleteRecipeAsync(recipeId).then(() => {
      dispatch(deleteRecipes(recipeId));
    });
  };
}
