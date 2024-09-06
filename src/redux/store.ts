import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import orderReducer from "./features/orders/OrdersSlice";
import productReducer from "./features/products/ProductSlice";
import cartOrderReducer from "./features/addToCart/AddToCartSlice";
import advertisementReducer from "./features/advertisement/advertisementSlice";

// ...

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    order: orderReducer,
    product: productReducer,
    cartOrder: cartOrderReducer,
    advertisement: advertisementReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
