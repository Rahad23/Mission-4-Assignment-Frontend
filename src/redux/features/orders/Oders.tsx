import { baseApi } from "../../api/baseApi";

const makeOrder = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    makeOrder: builder.mutation({
      query: (payload) => {
        return { url: "/orders", method: "POST", body: payload };
      },
      invalidatesTags: ["buy-product", "addToCart"],
    }),
  }),
});

export const { useMakeOrderMutation } = makeOrder;
