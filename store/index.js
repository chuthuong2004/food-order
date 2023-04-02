import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favoriteSlice";
import viewedReducer from "./slices/viewedSlice";
const store = configureStore({
  reducer: { favorite: favoriteReducer, viewed: viewedReducer },
});
export default store;
