import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteStackScreen from "./FavoriteNavigation";
import SeenStackScreen from "./SeenNavigation";
import HomeStackScreen from "./HomeNavigation";
import { COLORS } from "../contains";
import { useSelector } from "react-redux";
const Tab = createBottomTabNavigator();
const MyTabs = () => {
  const favorite = useSelector((state) => state.favorite.items);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "ios-home" : "ios-home-outline";
              break;
            case "Seen":
              iconName = focused ? "ios-timer" : "ios-timer-outline";
              break;
            case "Favorite":
              iconName = focused ? "ios-heart" : "ios-heart-outline";
              break;

            default:
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.second,
        tabBarInactiveTintColor: COLORS.second,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          height: 65,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 13,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ title: "Trang chủ" }}
      />
      <Tab.Screen
        name="Seen"
        component={SeenStackScreen}
        options={{ title: "Đã xem" }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteStackScreen}
        options={{ tabBarBadge: favorite.length, title: "Yêu thích" }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
