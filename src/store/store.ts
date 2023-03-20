import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "./slices/cartItemSlice";


export default configureStore({
  reducer: cartItemReducer
});

