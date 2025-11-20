// src/shared/api/baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getLocalStorage } from "../helpers";

const BASE_URL = "https://logistics.coachingzona.uz/v1/";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Loads"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = getLocalStorage("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
