import { API_MAP, API_METHODS, baseApi } from "@shared/model/api";
import type { IBaseResponse } from "@shared/model/types/base-response";
import type { IUserInfoResponse } from "@shared/model/types/user-info-response";

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

    getUserInfo: builder.query({
      query: () => ({
        url: API_MAP.GET_USER_INFO,
        method: API_METHODS.GET,
      }),
      transformResponse: (response: IBaseResponse<IUserInfoResponse>) => response?.data,
    }),
  }),
});

export const { useLoginMutation, useGetUserInfoQuery } = userApi;
