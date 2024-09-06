import { baseApi } from "@/redux/api/baseApi";

const addToCart = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    makeAddToCart: builder.mutation({
      query: (cartData) => {
        return { url: "/add-to-cart", method: "POST", body: cartData };
      },
      invalidatesTags: ["addToCart"],
    }),
    undoProduct: builder.mutation({
      query: (productId) => {
        return {
          url: `/add-to-cart/${productId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["addToCart"],
    }),
    getAddToCartProduct: builder.query({
      query: () => ({ url: `/add-to-cart`, method: "GET" }),
      providesTags: ["addToCart"],
    }),
    updateProductQuantity: builder.mutation({
      query: (data) => {
        return { url: "/add-to-cart", method: "PATCH", body: data };
      },
      invalidatesTags: ["addToCart"],
    }),
    cartOrderPost: builder.mutation({
      query: (data) => {
        return { url: "/orders-cart", method: "POST", body: data };
      },
      invalidatesTags: ["addToCart"],
    }),
  }),
});

export const {
  useMakeAddToCartMutation,
  useUndoProductMutation,
  useGetAddToCartProductQuery,
  useUpdateProductQuantityMutation,
  useCartOrderPostMutation
} = addToCart;
