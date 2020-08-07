import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ShoppingListPage from "./ShoppingListPage";

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
    </Stack.Navigator>
  );
};

export default ShoppingListStack;
