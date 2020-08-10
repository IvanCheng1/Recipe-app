import { recipes } from "./data";
import { AsyncStorage } from "react-native";

const RECIPE_STORAGE_KEY = "RECIPE_STORAGE_KEY";
const SHOPPING_LIST_STORAGE_KEY = "SHOPPING_LIST_STORAGE_KEY";

export const getRecipesAsync = async () => {
  try {
    // await AsyncStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify(recipes));

    const localStorage = await AsyncStorage.getItem(RECIPE_STORAGE_KEY);

    if (localStorage) {
      return JSON.parse(localStorage);
    } else {
      await AsyncStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify(recipes));
      return recipes;
    }
  } catch (e) {
    console.log(e);
  }
};

export const addRecipeAsync = async (recipe, recipeId) => {
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

export const deleteRecipeAsync = async (recipeId) => {
  try {
    const localStorage = await AsyncStorage.getItem(RECIPE_STORAGE_KEY);
    const recipes = JSON.parse(localStorage);

    delete recipes[recipeId];
    await AsyncStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify(recipes));
  } catch (e) {
    console.log(e);
  }
};

export const addShoppingListAsync = async (shoppingList) => {
  try {
    const localStorage = await AsyncStorage.getItem(SHOPPING_LIST_STORAGE_KEY);
    const prev = JSON.parse(localStorage);

    let toSave = {
      ...prev,
    };

    for (const [category, list] of Object.entries(shoppingList)) {
      // toSave[category] = []
      for (const [itemId, item] of Object.entries(list)) {
        if (toSave[category][itemId]) {
          // basic adding prev quantity to new quantity
          toSave[category][itemId].quantity =
            toSave[category][itemId].quantity + item.quantity;

          // set item to be unchecked on shopping list
          toSave[category][itemId].checked = false;
        } else {
          toSave[category][itemId] = item;
        }
      }
    }

    await AsyncStorage.setItem(
      SHOPPING_LIST_STORAGE_KEY,
      JSON.stringify(toSave)
    );

    return toSave;
  } catch (e) {
    console.log(e);
  }
};

export const getShoppingListAsync = async () => {
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

export const toggleCheckShoppingListAsync = async (category, itemId) => {
  try {
    const localStorage = await AsyncStorage.getItem(SHOPPING_LIST_STORAGE_KEY);
    let prev = JSON.parse(localStorage);
    // console.log(prev, "<--- before shopping list");

    const updated = {
      ...prev,
      [category]: {
        ...prev[category],
        [itemId]: {
          ...prev[category][itemId],
          checked: prev[category][itemId].checked
            ? !prev[category][itemId].checked
            : true,
        },
      },
    };

    // console.log(updated, "<--- updated shopping list");
    await AsyncStorage.setItem(
      SHOPPING_LIST_STORAGE_KEY,
      JSON.stringify(updated)
    );
    return updated;
  } catch (e) {
    console.log(e);
  }
};

export const deleteShoppingListItemAsync = async (category, itemId) => {
  try {
    const localStorage = await AsyncStorage.getItem(SHOPPING_LIST_STORAGE_KEY);
    let shoppingList = JSON.parse(localStorage);
    // console.log(prev, "<--- before shopping list");

    delete shoppingList[category][itemId];

    // console.log(updated, "<--- updated shopping list");
    await AsyncStorage.setItem(
      SHOPPING_LIST_STORAGE_KEY,
      JSON.stringify(shoppingList)
    );
    // return shoppingList
  } catch (e) {
    console.log(e);
  }
};
