import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { COLORS } from "../../contains";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { removeAllProductFavorite } from "../../store/slices/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeAllProductViewed } from "../../store/slices/viewedSlice";
const IconHeader = ({ seen, data }) => {
  const dispatch = useDispatch();

  const trashAllProduct = () => {
    if (data.length > 0) {
      Alert.alert(
        "Xác nhận xóa",
        seen
          ? "Bạn có chắc chắn muốn xóa tất cả sản phẩm đã xem ?"
          : "Bạn có chắc chắn muốn xóa tất cả sản phẩm yêu thích ?",
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
                seen ? removeAllProductViewed() : removeAllProductFavorite()
              ),
          },
        ]
      );
    } else {
      alert("Chưa có sản phẩm nào !!!");
    }
  };
  return (
    <TouchableOpacity onPress={trashAllProduct} style={styles.container}>
      <FontAwesome name={"trash"} size={30} color={COLORS.second} />
    </TouchableOpacity>
  );
};

export default IconHeader;
