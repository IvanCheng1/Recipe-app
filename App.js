import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Provider } from "react-redux";
import reducer from "./src/reducers";
import middleware from "./src/middleware";
import { createStore } from "redux";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import RecipeStack from "./src/pages/RecipeStack";
import AddRecipeStack from "./src/pages/AddRecipeStack";
import ShoppingListStack from "./src/pages/ShoppingListStack";

const store = createStore(reducer, middleware);
const Tab = createBottomTabNavigator();

export default class App extends Component {
  

  render() {
    return (
      <Provider store={store}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Recipes">
            <Tab.Screen
              name="Recipes"
              component={RecipeStack}
              options={{
                tabBarLabel: "Recipes",
                tabBarIcon: ({ color }) => (
                  <AntDesign name="home" color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Add Recipe"
              component={AddRecipeStack}
              options={{
                tabBarLabel: "Add Recipe",
                tabBarIcon: ({ color }) => (
                  <AntDesign name="plussquareo" color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Shopping"
              component={ShoppingListStack}
              options={{
                tabBarLabel: "Shopping List",
                tabBarIcon: ({ color }) => (
                  <Entypo name="list" color={color} size={24} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}