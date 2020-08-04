import { recipes } from "./data";
import { AsyncStorage } from "react-native";

const RECIPE_STORAGE_KEY = "RECIPE_STORAGE_KEY";

export const getRecipes = async () => {
  try {
    await AsyncStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify(recipes));

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
