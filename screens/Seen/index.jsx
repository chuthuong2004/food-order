import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import { FlatProduct } from "../../components";
import { useSelector } from "react-redux";
import { PRODUCTS } from "../../data";

const SeenScreen = ({ navigation }) => {
  const viewed = useSelector((state) => state.viewed.items);
  const products = viewed.map((itemId) =>
    PRODUCTS.find((prod) => prod.id === itemId)
  );
  console.log("produicts", products);
  const renderGridProduct = ({ item }) => {
    return <FlatProduct heart product={item} navigation={navigation} />;
  };
  const renderEmpty = () => (
    <View>
      <Text>Danh sách đã xem trống</Text>
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

export default SeenScreen;
