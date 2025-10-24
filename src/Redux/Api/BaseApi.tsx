import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const BaseApi = createApi({
  reducerPath: "BaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    credentials: "include",
  }),
  endpoints: () => ({}),
});
