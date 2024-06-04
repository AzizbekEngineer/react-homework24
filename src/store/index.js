import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../apiSlice/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import wishlistSlice from "./slice/wishlistSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    wishlist: wishlistSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
setupListeners(store.dispatch);
