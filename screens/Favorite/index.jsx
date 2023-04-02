import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import { FlatProduct } from "../../components";
import { useSelector } from "react-redux";
import { PRODUCTS } from "../../data";
const FavoriteScreen = ({ navigation }) => {
  const favorite = useSelector((state) => state.favorite.items);
  const products = favorite.map((itemId) =>
    PRODUCTS.find((item) => item.id === itemId)
  );
  const renderGridProduct = ({ item }) => {
    return <FlatProduct product={item} navigation={navigation} />;
  };
  const renderEmpty = () => (
    <View>
      <Text>Danh sách yêu thích rỗng !</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderGridProduct}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  );
};

export default FavoriteScreen;
