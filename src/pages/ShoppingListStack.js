import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ShoppingListPage from "./ShoppingListPage";
import ShoppingListAddItem from "./ShoppingListAddItem";

const Stack = createStackNavigator();

const ShoppingListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Shopping List"
        component={ShoppingListPage}
        options={{
          title: "Shopping List",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Add Item"
        component={ShoppingListAddItem}
        options={{
          title: "Add Item",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ShoppingListStack;
