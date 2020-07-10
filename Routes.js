import * as React from "react";
import HomeScreen from "./src/scenes/HomeScreen";
import ProductsListScreen from "./src/scenes/ProductsListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Product"
          options={{ headerShown: false }}
          component={ProductsListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
