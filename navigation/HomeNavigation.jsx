import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { COLORS } from "../contains";
import { CategoryScreen, HomeScreen, ProductScreen } from "../screens";
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.second,
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Món ăn ngon" }}
      />
      <HomeStack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={({ route }) => ({
          title: route.params.categoryName,
        })}
      />
      <HomeStack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={({ route }) => ({
          title: route.params.productName,
        })}
      />
    </HomeStack.Navigator>
  );
}
export default HomeStackScreen;
