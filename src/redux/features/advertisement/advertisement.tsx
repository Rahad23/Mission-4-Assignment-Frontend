import { baseApi } from "@/redux/api/baseApi";

const advertisement = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      makeAdvertisement: builder.mutation<void, FormData>({
        query: (formData) => {
          return {
            url: "/advertisement",
            method: "POST",
            body: formData,
          };
        },
        invalidatesTags: ["advertisement"],
      }),
      getAdvertisement: builder.query({
        query: () => {
          return { url: `/advertisement`, method: "GET" };
        },
        providesTags: ["advertisement"],
      }),
    };
  },
});

export const { useMakeAdvertisementMutation, useGetAdvertisementQuery } =
  advertisement;
