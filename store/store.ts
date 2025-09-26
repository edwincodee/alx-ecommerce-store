import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export const {} = productSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
