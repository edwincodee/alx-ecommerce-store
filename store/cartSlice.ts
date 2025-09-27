import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "@/interfaces";

interface CartItem extends Products {
  quantity: number;
}

interface CartState {
  cartProucts: CartItem[];
  isModalOpen: boolean;
}

const initialState: CartState = {
  cartProucts: [],
  isModalOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      const itemExist = state.cartProucts.find(
        (item) => item.id === action.payload.id
      );
      if (itemExist) {
        itemExist.quantity += 1;
      } else {
        state.cartProucts.unshift({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartProucts = state.cartProucts.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartProucts.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartProucts.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartProucts = state.cartProucts.filter(
          (i) => i.id !== action.payload
        );
      }
    },
    clearCart: (state) => {
      state.cartProucts = [];
    },
    toggleCart: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;
