import { configureStore } from "@reduxjs/toolkit";
import productsSlicer from "./slices/products-slices";
import cartSlice from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    products: productsSlicer,
    cart: cartSlice,
  },
});
