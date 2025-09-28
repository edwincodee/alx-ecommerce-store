import { Products, ProductState } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Products[]>) => {
      const products = action.payload.map((product: Products) => ({
        ...product,
        quantity: 1,
        itemPrice: product.price,
      }));

      state.products = products;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
