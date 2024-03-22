import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackScreen from "./src/nestedNavigator/StackScreen";
// import { Provider } from "react-redux";
// import store from "../src/redux/store";
const App = () => {
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    // </Provider>
  );
};

export default App;
