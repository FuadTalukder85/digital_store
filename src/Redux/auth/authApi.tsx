import { BaseApi } from "../Api/BaseApi";

const authApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUsers: builder.mutation({
      query: ({
        data,
        referralCode,
      }: {
        data: any;
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
  }),
});

export const { useRegisterUsersMutation } = authApi;
