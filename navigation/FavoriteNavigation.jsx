import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { FavoriteScreen } from "../screens";
import { COLORS } from "../contains";
import IconHeader from "../components/IconHeader";
import { useSelector } from "react-redux";
const FavoriteStack = createStackNavigator();
function FavoriteStackScreen() {
  const favorites = useSelector((state) => state.favorite.items);
  return (
    <FavoriteStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.second,
      }}
    >
      <FavoriteStack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          title: "Yêu thích",
          headerRight: () => <IconHeader data={favorites} />,
        }}
      />
    </FavoriteStack.Navigator>
  );
}
export default FavoriteStackScreen;
