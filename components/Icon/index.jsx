import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../contains";
import styles from "./styles";

const Icon = ({ name, number }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name={name} size={30} color={COLORS.icon} />
      {number && <Text style={styles.iconText}>{number}</Text>}
    </View>
  );
};

export default Icon;
