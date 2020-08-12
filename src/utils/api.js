import { recipes } from "./data";
import { AsyncStorage } from "react-native";
import { capitaliseWordAndRemoveSpace } from "./helpers";

const RECIPE_STORAGE_KEY = "RECIPE_STORAGE_KEY";
const SHOPPING_LIST_STORAGE_KEY = "SHOPPING_LIST_STORAGE_KEY";

// get all recipe from async
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

// add recipe to async
export const addRecipeAsync = async (recipe, recipeId) => {
  try {
    let item = {
      [recipeId]: {
        ...recipe,
        ingredients: {},
      },
    };

    for (const [category, list] of Object.entries(recipe.ingredients)) {
      item[recipeId].ingredients[category] = {};

      for (const ingredient of Object.values(list)) {
        const id =
          capitaliseWordAndRemoveSpace(ingredient.item) +
          "_" +
          capitaliseWordAndRemoveSpace(recipe.title);
        item[recipeId].ingredients[category][id] = ingredient;
      }
    }

    await AsyncStorage.mergeItem(RECIPE_STORAGE_KEY, JSON.stringify(item));
    const toSave = item[recipeId];
    return toSave;
  } catch (e) {
    console.log(e);
  }
};

// delete recipe from async
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

// add the entire recipe shopping list to async
export const addShoppingListAsync = async (shoppingList, title) => {
  try {
    const localStorage = await AsyncStorage.getItem(SHOPPING_LIST_STORAGE_KEY);
    const prev = JSON.parse(localStorage);

    let toSave = {
      ...prev,
    };

    for (const [category, list] of Object.entries(shoppingList)) {
      if (!toSave[category]) {
        toSave[category] = {};
      }

      for (const [itemId, item] of Object.entries(list)) {
        toSave[category][itemId] = item;
        toSave[category][itemId].checked = false;
        toSave[category][itemId].for = title;
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

// this adds a single item to the shopping list
export const addItemShoppingListAsync = async (item, quantity, category) => {
  try {
    const localStorage = await AsyncStorage.getItem(SHOPPING_LIST_STORAGE_KEY);
    const prev = JSON.parse(localStorage);

    const itemId = capitaliseWordAndRemoveSpace(item);

    let toSave = {
      ...prev,
      [category]: {
        ...prev[category],
        [itemId]: {
          checked: false,
          item: item,
          quantity: quantity,
        },
      },
    };

    await AsyncStorage.setItem(
      SHOPPING_LIST_STORAGE_KEY,
      JSON.stringify(toSave)
    );

    return toSave;
  } catch (e) {
    console.log(e);
  }
};

// get shopping list from async
export const getShoppingListAsync = async () => {
  try {
    // await AsyncStorage.setItem(SHOPPING_LIST_STORAGE_KEY, JSON.stringify({}));

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

// when user ticks/untick from the shopping list
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

// delete single item in shopping list
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

// clear shopping list
export const clearShoppingListAsync = async () => {
  try {
    await AsyncStorage.setItem(SHOPPING_LIST_STORAGE_KEY, JSON.stringify({}));
  } catch (e) {
    console.log(e);
  }
};
