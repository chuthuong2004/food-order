import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
// import { Icon } from "react-native-vector-icons/icon";
import styles from "./styles";
import Icon from "../Icon";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/slices/favoriteSlice";

const FlatCategory = ({ product, onPress }) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.items);
  const viewed = useSelector((state) => state.viewed.items);
  const isFavorite = favorite.includes(product.id);
  const isViewed = viewed.includes(product.id);
  const handleChangeFavorite = () => {
    dispatch(toggleFavorite({ id: product.id }));
  };
  return (
    <TouchableOpacity style={styles.productWrap} onPress={onPress}>
      <View style={styles.product}>
        <View style={styles.productBoxImg}>
          <Image style={styles.productImg} source={product.thumb} />
        </View>
        <Text style={styles.productText}>{product.title}</Text>
        <View style={styles.productIcon}>
          <TouchableOpacity style={styles.icon} onPress={handleChangeFavorite}>
            <Icon
              name={isFavorite ? "heart" : "heart-o"}
              number={isFavorite ? product.favorite + 1 : product.favorite}
            />
          </TouchableOpacity>
          <View style={styles.icon}>
            <Icon
              name="eye"
              number={isViewed ? product.view + 1 : product.view}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FlatCategory;
