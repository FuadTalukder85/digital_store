import { BaseApi } from "../Api/BaseApi";

const authApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUsers: builder.mutation({
      query: ({
        data,
        referralCode,
      }: {
        data: unknown;
        referralCode?: string | null;
      }) => {
        const query = referralCode ? `?r=${referralCode}` : "";
        return {
          url: `/auth/register${query}`,
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    loginUsers: builder.mutation({
      query: (loggedUser) => ({
        url: "/auth/login",
        method: "POST",
        body: loggedUser,
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "/auth/users",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterUsersMutation,
  useLoginUsersMutation,
  useGetUsersQuery,
} = authApi;
