import { Products, ProductState } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ProductSlice extends ProductState {
  filtered: boolean;
}
const initialState: ProductSlice = {
  products: [],
  filtered: false,
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
    filter: (state) => {
      state.filtered = true;
    },
  },
});

export const { setProducts, filter } = productSlice.actions;
export default productSlice.reducer;
