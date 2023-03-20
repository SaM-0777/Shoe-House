import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


export interface ICartItem {
  id: string,
  name: string,
  price: number,
  quantity: number,
  productImageUri: string,
}

export const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [] as ICartItem[],
  },
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      const itemInCart = state.cartItems.find(item => item.id === action.payload.id)
      if (itemInCart) {
        itemInCart.quantity ++
      } else {
        state.cartItems.push(action.payload)
      }
    },
    incrementQuantity: (state, action: PayloadAction<ICartItem>) => {
      const itemInCart = state.cartItems.find((item) => item.id === action.payload.id)
      itemInCart!.quantity++
    },
    decrementQuantity: (state, action: PayloadAction<ICartItem>) => {
      const itemInCart = state.cartItems.find((item) => item.id === action.payload.id)
      if (itemInCart!.quantity === 1) {
        itemInCart!.quantity = 1
      } else {
        itemInCart!.quantity--
      }
    },
    removeItem: (state, action: PayloadAction<ICartItem>) => {
      const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id)
      state.cartItems = removeItem
    },
  },
})


export default cartItemSlice.reducer;
export const selectCartItems = (state: { cartItems: ICartItem[] }) => state.cartItems;
export const {
  addItem,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartItemSlice.actions;

