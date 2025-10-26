"use client";
import React from "react";
import toast from "react-hot-toast";
import { motion, Variants } from "framer-motion";
import { useGetProductsQuery } from "@/Redux/Product/ProductApi";
import { useCreatePurchaseMutation } from "@/Redux/Purchase/PurchaseApi";
import { TCardTypes } from "@/Types/Types";
import Card from "@/app/Components/ReusableCard/Card";

const Product: React.FC = () => {
  const { data, isLoading } = useGetProductsQuery("");
  const [createPurchase, { isLoading: isPurchasing }] =
    useCreatePurchaseMutation();
  if (isLoading) {
    return <div className="text-center py-20 text-gray-500">Loading...</div>;
  }
  const handleBuyNow = async (productId: string, price: number) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please login first!");
        return;
      }
      const loadingToast = toast.loading("Processing your purchase...");
      const res = await createPurchase({
        productId,
        price,
        token,
      }).unwrap();

      toast.dismiss(loadingToast);
      toast.success(res.message || "Purchase successful!");
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } };
      console.error("Purchase failed:", err);
      toast.dismiss();
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };
  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: ["easeOut"],
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="flex flex-col justify-between bg-white rounded-2xl shadow hover:shadow-xl border border-gray-100 transition-all duration-300 p-2 md:p-0"
            >
              <Card
                img={product.img}
                title={product.title}
                price={product.price}
                discount={product.discount}
              />
              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  handleBuyNow(product._id as string, product.price as number)
                }
                disabled={isPurchasing}
                className="bg-[#e8f5e9] w-[90%] mx-auto mb-6 border border-gray-200 text-primary px-5 py-2 font-semibold rounded-2xl hover:bg-[#0F494D] transition-all duration-300 hover:text-white cursor-pointer disabled:opacity-50"
              >
                {isPurchasing ? "Processing..." : "Buy Now"}
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
