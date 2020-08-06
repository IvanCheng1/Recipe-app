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
    case CREATE_RECIPES:
      return {
        ...state,
        [action.recipeId]: {
          title: action.recipe.title,
          course: action.recipe.course,
          ingredients: action.recipe.ingredients,
          notes: action.recipe.notes,
          image: action.recipe.image,
        },
      };
    case REMOVE_RECIPES:
      delete state[action.recipeId];
      return {
        ...state,
      }
    default:
      return state;
  }
}
