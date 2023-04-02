import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import styles from "./styles";
import { FlatCategory } from "../../components";
import { PRODUCTS } from "../../data";
const CategoryScreen = ({ navigation, route }) => {
  const { categoryId, categoryName } = route.params;
  const productData = PRODUCTS.filter(
    (product) => product.categoryId === categoryId
  );
  console.log(categoryName);
  const renderGridProduct = ({ item }) => {
    console.log(item);
    return (
      <FlatCategory
        product={item}
        onPress={() => {
          navigation.push("ProductScreen", {
            productId: item.id,
            productName: item.title,
          });
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={productData}
        renderItem={renderGridProduct}
        // numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoryScreen;
