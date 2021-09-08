import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartOpen: false, addMenuOpen: false },
  reducers: {
    openCart(state) {
      state.cartOpen = true;
    },
    closeCart(state) {
      state.cartOpen = false;
    },
    openAddMenu(state) {
      state.addMenuOpen = true;
    },
    closeAddMenu(state) {
      state.addMenuOpen = false;
    },
  },
});
export const uiAction = uiSlice.actions;
export default uiSlice;
