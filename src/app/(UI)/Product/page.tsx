"use client";
import Card from "@/app/Components/ReusableCard/Card";
import React from "react";
import { useGetProductsQuery } from "@/Redux/Product/ProductApi";
import { useCreatePurchaseMutation } from "@/Redux/Purchase/PurchaseApi";
import { TCardTypes } from "@/Types/Types";
import toast from "react-hot-toast";

const Product: React.FC = () => {
  const { data, isLoading } = useGetProductsQuery("");
  const [createPurchase, { isLoading: isPurchasing }] =
    useCreatePurchaseMutation();

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  const handleBuyNow = async (productId: string, price: number) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please login first!");
        return;
      }
      toast.loading("Processing your purchase...");
      const res = await createPurchase({
        productId,
        price,
        token,
      }).unwrap();

      toast.dismiss();
      toast.success(res.message || "Purchase successful!");
    } catch (err: any) {
      console.error("Purchase failed:", err);
      toast.dismiss();
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-16 grid grid-cols-4 gap-10">
      {data?.map((product: Partial<TCardTypes>, index: number) => {
        if (
          !product?.img ||
          !product.title ||
          product.price == null ||
          product.discount == null
        ) {
          return null;
        }
        return (
          <div key={index}>
            <Card
              img={product.img}
              title={product.title}
              price={product.price}
              discount={product.discount}
            />
            <button
              type="button"
              onClick={() =>
                handleBuyNow(product._id as string, product.price as number)
              }
              disabled={isPurchasing}
              className="bg-[#0f494d15] w-full text-primary px-5 py-2 font-semibold rounded-md hover:bg-[#0F494D] transition-all duration-300 hover:text-white cursor-pointer disabled:opacity-50"
            >
              {isPurchasing ? "Processing..." : "Buy Now"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
