import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { SeenScreen } from "../screens";
import { COLORS } from "../contains";
import IconHeader from "../components/IconHeader";
import { useSelector } from "react-redux";
const SeenStack = createStackNavigator();
function SeenStackScreen() {
  const viewed = useSelector((state) => state.viewed.items);

  return (
    <SeenStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.second,
      }}
    >
      <SeenStack.Screen
        name="SeenScreen"
        component={SeenScreen}
        options={{
          title: "Đã xem",
          headerRight: () => <IconHeader seen data={viewed} />,
        }}
      />
    </SeenStack.Navigator>
  );
}
export default SeenStackScreen;
