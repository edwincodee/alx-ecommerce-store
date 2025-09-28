import { Products } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

interface ProductState {
  filteredItems: Products[];
  search: string;
  category: string;
}

const initialState: ProductState = {
  filteredItems: [],
  search: "",
  category: "All",
};

export const filterSlice = createSlice({
  name: "filtered",
  initialState,
  reducers: {
    setSearchedProducts: (state, action: PayloadAction<Products[]>) => {
      state.filteredItems = action.payload;
    },

    setCategoryProducts: (state, action: PayloadAction<Products>) => {
      state.filteredItems = [];
      state.filteredItems.push(action.payload);
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const {
  setSearchedProducts,
  setSearch,
  setCategory,
  setCategoryProducts,
} = filterSlice.actions;
export default filterSlice.reducer;
