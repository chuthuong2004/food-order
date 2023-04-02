import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import { Category } from "../../components";
import { CATEGORIES } from "../../data";

const HomeScreen = ({ navigation }) => {
  const renderGridCategory = ({ item }) => {
    return (
      <Category
        title={item.title}
        thumb={item.thumb}
        onPress={() =>
          navigation.push("CategoryScreen", {
            categoryId: item.id,
            categoryName: item.title,
          })
        }
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderGridCategory}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;
