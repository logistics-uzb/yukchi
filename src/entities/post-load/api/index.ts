import { API_MAP, API_METHODS, baseApi } from "@shared/model/api";

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postLoad: builder.mutation({
      query: (body) => ({
        url: API_MAP.POST_LOAD,
        method: API_METHODS.POST,
        body,
      }),
      invalidatesTags: ["Loads"],
    }),

    getLoads: builder.query({
      query: () => ({
        url: API_MAP.GET_LOADS,
        method: API_METHODS.GET,
      }),
      providesTags: ["Loads"],
    }),
  }),
});

export const { useGetLoadsQuery, usePostLoadMutation } = postApi;
