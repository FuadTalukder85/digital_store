import { BaseApi } from "../Api/BaseApi";

export const purchaseApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPurchase: builder.mutation({
      query: ({ productId, price, token }) => ({
        url: "/purchase",
        method: "POST",
        body: { productId, price },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useCreatePurchaseMutation } = purchaseApi;
