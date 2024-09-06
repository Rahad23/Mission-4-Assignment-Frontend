import { baseApi } from "@/redux/api/baseApi";

const categoryData = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({ url: `/category`, method: "GET" }),
      providesTags: ["category"],
    }),
    getSingleCategoryProducts: builder.query({
      query: (id) => ({
        url: `/category/${id}`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    createCategory: builder.mutation({
      query: (data) => {
        return {
          url: `/category`,
          method: "POST",
          body: data,
          // headers: { "Content-Type": "multipart/form-data" },
        };
      },
      invalidatesTags: ["category"],
    }),

    updateCategory: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/category`,
          method: "PATCH",
          body: data,
          // headers: { "Content-Type": "multipart/form-data" },
        };
      },
      invalidatesTags: ["category"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => {
        return {
          url: `/category/${id}`,
          method: "DELETE",
          // headers: { "Content-Type": "multipart/form-data" },
        };
      },
      invalidatesTags: ["category"],
    }),

    getSingleCategory: builder.query({
      query: (id) => ({
        url: `/category/category/${id}`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetSingleCategoryProductsQuery,
  useCreateCategoryMutation,
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryData;
