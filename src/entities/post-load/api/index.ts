import { API_MAP, API_METHODS, baseApi } from "@shared/model/api";

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // GET
    getLoads: builder.query({
      query: (params) => ({
        url: API_MAP.GET_LOADS,
        method: API_METHODS.GET,
        params,
      }),
      providesTags: ["Loads"],
    }),

    // POST
    postLoad: builder.mutation({
      query: (body) => ({
        url: API_MAP.POST_LOAD,
        method: API_METHODS.POST,
        body,
      }),
      invalidatesTags: ["Loads"],
    }),

    // DELETE
    deleteLoad: builder.mutation({
      query: (id) => ({
        url: `${API_MAP.DELETE_LOAD}/${id}`,
        method: API_METHODS.DELETE,
      }),
      invalidatesTags: ["Loads"],
    }),
  }),
});

export const { useGetLoadsQuery, usePostLoadMutation, useDeleteLoadMutation } =
  postApi;
