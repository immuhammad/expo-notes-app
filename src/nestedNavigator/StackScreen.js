import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenOne from "../screens/DashboardScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import DrawerScreen from "./DrawerScreen";
const Stack = createStackNavigator();
const StackScreen = () => (
  <Stack.Navigator initialRouteName="SignInScreen">
    <Stack.Screen
      name="SignInScreen"
      component={SignInScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="SignUpScreen"
      component={SignUpScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="DrawerScreen"
      component={DrawerScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    
    <Stack.Screen
      name="DashboardScreen"
      component={ScreenOne}
      options={{ headerShown: false }}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default StackScreen;
