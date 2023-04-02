import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const productId = state.items.find((item) => item === action.payload.id);

      console.log("state1", state.items);
      if (productId) {
        state.items = state.items.filter((item) => item !== productId);
      } else {
        state.items = [...state.items, action.payload.id];
      }
      console.log("state2", state.items);
    },
    removeProductFavorite: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload.id);
    },
    removeAllProductFavorite: (state, action) => {
      state.items = [];
    },
  },
});

export const {
  toggleFavorite,
  removeProductFavorite,
  removeAllProductFavorite,
} = favoriteSlice.actions;
export default favoriteSlice.reducer;
