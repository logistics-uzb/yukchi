import { API_MAP, API_METHODS, baseApi } from "@shared/model/api";

interface ILogin {
  username: string;
  password: string;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: ILogin) => ({
        url: API_MAP.LOGIN,
        method: API_METHODS.POST,
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = userApi;
