import { baseApi } from "@/redux/api/baseApi";

const categoryData = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({ url: `/category`, method: "GET" }),
    }),
  }),
});

export const { useGetCategoryQuery } = categoryData;
