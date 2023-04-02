import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./navigation/index";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
