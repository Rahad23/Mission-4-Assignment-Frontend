import { baseApi } from "@/redux/api/baseApi";

const productData = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getProduct: builder.query({
        query: (data) => {
          return { url: `/products?searchTerm=${data?.search}`, method: "GET" };
        },
        providesTags: ["product"],
      }),
      getHomeProduct: builder.query({
        query: (data) => {
          return {
            url: `/products/home-product?searchTerm=${
              data?.search ? data?.search : ""
            }`,
            method: "GET",
          };
        },
        providesTags: ["product"],
      }),
      getProductCategory: builder.query({
        query: (data) => {
          return {
            url: `/products?searchCategory=${JSON.stringify(data)}`,
            method: "GET",
          };
        },
      }),
      getOneProduct: builder.query({
        query: (id) => ({ url: `/products/${id}`, method: "GET" }),
        providesTags: ["buy-product"],
      }),
      makeProduct: builder.mutation<void, FormData>({
        query: (formData) => {
          console.log(formData, "check");
          return {
            url: "/products",
            method: "POST",
            body: formData,
            // headers: { "Content-Type": "multipart/form-data" },
          };
        },
        invalidatesTags: ["product"],
      }),
      updateProduct: builder.mutation<void, { formData: FormData; id: string }>(
        {
          query: ({ formData, id }) => {
            return {
              url: `/products/${id}`,
              method: "PATCH",
              body: formData,
              // headers: { "Content-Type": "multipart/form-data" },
            };
          },
          invalidatesTags: ["product"],
        }
      ),
      deleteProduct: builder.mutation({
        query: (id) => {
          return {
            url: `/products/${id}`,
            method: "DELETE",
            // headers: { "Content-Type": "multipart/form-data" },
          };
        },
        invalidatesTags: ["product"],
      }),
    };
  },
});

export const {
  useGetProductQuery,
  useGetOneProductQuery,
  useGetProductCategoryQuery,
  useGetHomeProductQuery,
  useMakeProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productData;
