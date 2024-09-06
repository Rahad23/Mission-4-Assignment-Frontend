import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: [
    "addToCart",
    "buy-product",
    "product",
    "category",
    "advertisement",
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://campers-shop-backend-nine.vercel.app/api/v2",
  }),
  //   endpoints: (builder) => ({
  //     getAllProduct: builder.query({
  //         query: () => ({ url: "/products", method: "GET" }),
  //       }),
  //   }),
  endpoints: () => ({}),
});
