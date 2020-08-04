import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Recipes from "./Recipes";
import RecipePage from "./RecipePage";

const Stack = createStackNavigator();

const RecipeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Recipes}
        options={{
          title: "Recipe",
        }}
      />
      <Stack.Screen
        name="Recipe Page"
        component={RecipePage}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default RecipeStack;
