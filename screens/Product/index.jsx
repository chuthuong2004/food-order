import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { Icon } from "../../components";
import { PRODUCTS } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { addNewProductView } from "../../store/slices/viewedSlice";
import { toggleFavorite } from "../../store/slices/favoriteSlice";
const ProductScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorite.items);
  const viewed = useSelector((state) => state.viewed.items);

  const { productId, productName } = route.params;
  const product = PRODUCTS.find((prod) => prod.id === productId);

  const isFavorite = favorites.includes(product.id);
  const isView = viewed.includes(product.id);
  const iconFavorite = isFavorite ? "heart" : "heart-o";
  const totalFavorite = isFavorite ? product.favorite + 1 : product.favorite;
  const totalView = isView ? product.view + 1 : product.view;

  useEffect(() => {
    dispatch(addNewProductView({ id: productId }));
  }, []);
  const handleFavorite = () => {
    dispatch(toggleFavorite({ id: product.id }));
  };
  return (
    <View style={styles.product}>
      <Image
        style={styles.background}
        source={require("../../assets/images/food.jpg")}
      />
      <View style={styles.productImg}>
        <Image style={styles.img} source={product?.thumb} />
        <TouchableOpacity
          style={[styles.productImgIcon, styles.productImgIconLeft]}
          onPress={handleFavorite}
        >
          <Icon name={iconFavorite} number={totalFavorite} />
        </TouchableOpacity>
        <View style={[styles.productImgIcon, styles.productImgIconRight]}>
          <Icon name="eye" number={totalView} />
        </View>
      </View>
      <View style={styles.productContent}>
        <ScrollView>
          <Text style={[styles.text, styles.productContentText]}>
            {product?.intro}
          </Text>
          <View style={styles.productContentBox}>
            <View style={styles.productContentBoxTitle}>
              <Text style={styles.textTitle}>Nguyên liệu</Text>
            </View>
            <Text style={[styles.text, styles.productContentBoxContent]}>
              {product?.ingredients}
            </Text>
          </View>
          <View style={styles.productContentBox}>
            <View style={styles.productContentBoxTitle}>
              <Text style={styles.textTitle}>Cách làm</Text>
            </View>
            <Text style={[styles.text, styles.productContentBoxContent]}>
              {product?.instructions}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductScreen;
