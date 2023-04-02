import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import React from "react";
import styles from "./styles";
import Icon from "../Icon";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProductFavorite,
  toggleFavorite,
} from "../../store/slices/favoriteSlice";
import { removeProductView } from "../../store/slices/viewedSlice";

const FlatProduct = ({ product, heart, navigation }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorite.items);
  const isFavorite = favorites.includes(product.id);
  const handleRemoveFavorite = () => {
    Alert.alert(
      "Xác nhận xóa",
      heart
        ? "Bạn có chắc chắn muốn xóa khỏi danh sách đã xem ?"
        : "Bạn có chắc chắn muốn xóa khỏi danh sách yêu thích ?",
      [
        {
          text: "Hủy",
          onPress: () => console.log("Cancel"),
          style: "cancel",
        },
        {
          text: "Đồng ý",
          onPress: () =>
            dispatch(
              heart
                ? removeProductView({ id: product.id })
                : removeProductFavorite({ id: product.id })
            ),
        },
      ]
    );
  };
  const handleFavorite = () => {
    dispatch(toggleFavorite({ id: product.id }));
  };
  const changeScreenProduct = () => {
    navigation.navigate("ProductScreen", {
      productId: product.id,
      productName: product.title,
    });
  };
  return (
    <TouchableOpacity style={styles.productBox} onPress={changeScreenProduct}>
      <View style={styles.product}>
        <View style={styles.productBoxImage}>
          <Image style={styles.productImage} source={product?.thumb} />
        </View>
        <View style={styles.productBoxTitle}>
          <Text style={styles.title}>{product?.title}</Text>
        </View>
      </View>
      <View style={styles.icon}>
        {heart && (
          <TouchableOpacity onPress={handleFavorite} style={styles.iconBox}>
            <Icon name={isFavorite ? "heart" : "heart-o"} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleRemoveFavorite} style={styles.iconBox}>
          <Icon name="trash" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FlatProduct;
