import { createSlice } from "@reduxjs/toolkit";

const viewedSlice = createSlice({
  name: "viewed",
  initialState: {
    items: [],
  },
  reducers: {
    addNewProductView: (state, action) => {
      state.items = [...new Set([action.payload.id, ...state.items])];
      console.log("item", state.items);
    },
    removeProductView: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload.id);
    },
    removeAllProductViewed: (state, action) => {
      state.items = [];
    },
  },
});

export const { addNewProductView, removeProductView, removeAllProductViewed } =
  viewedSlice.actions;
export default viewedSlice.reducer;
