import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "@/interfaces";

interface CartItem extends Products {
  quantity: number;
}

interface CartState {
  cartProucts: CartItem[];
  isModalOpen: boolean;
  totalCartItem: number;
}

const initialState: CartState = {
  cartProucts: [],
  isModalOpen: false,
  totalCartItem: 0,
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
        itemExist.quantity += itemExist.quantity;
        itemExist.itemPrice += itemExist.itemPrice;
      } else {
        state.cartProucts.unshift(action.payload);
      }
      state.totalCartItem += action.payload.quantity;
    },
    removeFromCart: (state, action: PayloadAction<Products>) => {
      const itemExist = state.cartProucts.find(
        (item) => item.id === action.payload.id
      );

      if (
        itemExist &&
        itemExist.itemPrice !== action.payload.price &&
        itemExist.quantity > 1
      ) {
        itemExist.quantity--;
        itemExist.itemPrice -= itemExist.price;
      } else {
        state.cartProucts = state.cartProucts.filter(
          (item) => item.id !== action.payload.id
        );
      }
      state.totalCartItem > 0 && state.totalCartItem--;
    },
    // increaseQuantity: (state, action: PayloadAction<number>) => {
    //   const item = state.cartProucts.find((i) => i.id === action.payload);
    //   if (item) item.quantity += 1;
    // },
    // decreaseQuantity: (state, action: PayloadAction<number>) => {
    //   const item = state.cartProucts.find((i) => i.id === action.payload);
    //   if (item && item.quantity > 1) {
    //     item.quantity -= 1;
    //   } else {
    //     state.cartProucts = state.cartProucts.filter(
    //       (i) => i.id !== action.payload
    //     );
    //   }
    // },
    clearCart: (state) => {
      state.cartProucts = [];
      state.totalCartItem = 0;
    },
    toggleCart: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  //   increaseQuantity,
  //   decreaseQuantity,
  clearCart,
  toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;
