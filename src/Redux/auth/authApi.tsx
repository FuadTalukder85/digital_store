import { BaseApi } from "../Api/BaseApi";

const authApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUsers: builder.mutation({
      query: (users) => ({
        url: "/auth/register",
        method: "POST",
        body: users,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});
export const { useRegisterUsersMutation } = authApi;
