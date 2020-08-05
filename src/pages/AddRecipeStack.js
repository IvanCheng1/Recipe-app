import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import AddRecipePage from './AddRecipePage';

const Stack = createStackNavigator();

const AddRecipeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Add Recipe"
        component={AddRecipePage}
        options={{
          title: "Add Recipe",
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

export default AddRecipeStack