import { API_MAP, API_METHODS, baseApi } from "@shared/model/api";

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postLoad: builder.mutation({
      query: (body) => ({
        url: API_MAP.POST_LOAD,
        method: API_METHODS.POST,
        body,
      }),
    }),
  }),
});

export const { usePostLoadMutation } = postApi;
