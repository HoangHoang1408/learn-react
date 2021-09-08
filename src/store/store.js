import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import menuSlice from "./menuSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    menu: menuSlice.reducer,
  },
});
export default store;
