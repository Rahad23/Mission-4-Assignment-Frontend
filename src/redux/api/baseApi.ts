import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["addToCart", "buy-product", "product"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v2" }),
  //   endpoints: (builder) => ({
  //     getAllProduct: builder.query({
  //         query: () => ({ url: "/products", method: "GET" }),
  //       }),
  //   }),
  endpoints: () => ({}),
});
