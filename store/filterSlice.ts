import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ProductState {
  search: string;
  category: string;
}

const initialState: ProductState = {
  search: "",
  category: "All",
};

export const filterSlice = createSlice({
  name: "filtered",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setSearch, setCategory } = filterSlice.actions;
export default filterSlice.reducer;
