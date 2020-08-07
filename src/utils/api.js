import { recipes } from "./data";
import { AsyncStorage } from "react-native";

const RECIPE_STORAGE_KEY = "RECIPE_STORAGE_KEY";
const SHOPPING_LIST_STORAGE_KEY = "SHOPPING_LIST_STORAGE_KEY";

export const getRecipes = async () => {
  try {
    // await AsyncStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify(recipes));

    const localStorage = await AsyncStorage.getItem(RECIPE_STORAGE_KEY);
    // console.log(JSON.parse(localStorage))

    if (localStorage) {
      return JSON.parse(localStorage);
    } else {
      // const r = _getRecipes()
      await AsyncStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify(recipes));
      return recipes;
    }
  } catch (e) {
    console.log(e);
  }
};

export const addRecipe = async (recipe, recipeId) => {
  try {
    const item = JSON.stringify({
      [recipeId]: {
        ...recipe,
      },
    });

    await AsyncStorage.mergeItem(RECIPE_STORAGE_KEY, item);
  } catch (e) {
    console.log(e);
  }
};

export const addShoppingList = async (list) => {
  try {
    await AsyncStorage.setItem(SHOPPING_LIST_STORAGE_KEY, JSON.stringify(list));

    return list;
  } catch (e) {
    console.log(e);
  }
};

export const getShoppingList = async () => {
  try {
    const localStorage = await AsyncStorage.getItem(SHOPPING_LIST_STORAGE_KEY);

    if (localStorage) {
      return JSON.parse(localStorage);
    } else {
      return {};
    }
  } catch (e) {
    console.log(e);
  }
};

// const ingredients = {
//   Spices: {
//     Spices0: {
//       item: "curry powder",
//       quantity: "222g",
//     },
//     Spices1: {
//       item: "pepper",
//       quantity: "1 tbsp",
//     },
//     Spices2: {
//       item: "a",
//       quantity: "3",
//     },
//   },
//   Colds: {},
//   Vegetables: {
//     Vegetables0: {
//       item: "cauliflower",
//       quantity: "222g",
//     },
//   },
// };
