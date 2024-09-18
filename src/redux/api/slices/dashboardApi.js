import { baseApi } from "../baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTotalUserStats: build.query({
      query: () => {
        return {
          url: "/admin/user-statistic",
          method: "GET",
        };
      },
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Stats"],
    }),
    getTotalEarningStats: build.query({
      query: () => {
        return {
          url: "/admin/earning-statistic",
          method: "GET",
        };
      },
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Stats"],
    }),
    getTotalBookingStats: build.query({
      query: () => {
        return {
          url: "/admin/booking-summary",
          method: "GET",
        };
      },
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Stats"],
    }),
  }),
});

export const {
  useGetTotalBookingStatsQuery,
  useGetTotalEarningStatsQuery,
  useGetTotalUserStatsQuery,
} = dashboardApi;
