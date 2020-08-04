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
import ShoppingListTab from "./src/pages/ShoppingListTab";
import RecipeStack from "./src/pages/RecipeStack";

const store = createStore(reducer, middleware);
const Tab = createBottomTabNavigator();

export default class App extends Component {
  

  render() {
    return (
      <Provider store={store}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Recipe">
            <Tab.Screen
              name="Recipe"
              component={RecipeStack}
              options={{
                tabBarLabel: "Recipe",
                tabBarIcon: ({ color }) => (
                  <AntDesign name="home" color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Shopping"
              component={ShoppingListTab}
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