import { BaseApi } from "../Api/BaseApi";

const ProductApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (addProduct) => ({
        url: "/products",
        method: "POST",
        body: addProduct,
      }),
    }),
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),

    getSingleProduct: builder.query({
      query: (_id) => ({
        url: `/products/${_id}`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useAddProductMutation,
  useGetProductsQuery,
  useGetSingleProductQuery,
} = ProductApi;
