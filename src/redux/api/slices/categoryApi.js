import { baseApi } from "../baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Category"],
    }),
    addCategory: build.mutation({
      query: (data) => ({
        url: "/category/create-category",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Category"],
    }),
    // updateCategory: build.mutation({
    //   query: (args) => {
    //     console.log(args, "args from base api");
    //     return {
    //       url: `/categories/${args.id}`,
    //       method: "PATCH",
    //       body: args.data,
    //     };
    //   },
    //   invalidatesTags: ["Category"],
    // }),
    // deleteCategory: build.mutation({
    //   query: (id) => {
    //     return {
    //       url: `/categories/${id}`,
    //       method: "DELETE",
    //     };
    //   },
    //   invalidatesTags: ["Category"],
    // }),
  }),
});

export const { useAddCategoryMutation, useGetCategoryQuery } = categoryApi;
