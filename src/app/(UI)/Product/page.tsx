"use client";
import Card from "@/app/Components/ReusableCard/Card";
import React from "react";
import { useGetProductsQuery } from "@/Redux/Product/ProductApi";
import { TCardTypes } from "@/Types/Types";

const Product: React.FC = () => {
  const { data } = useGetProductsQuery("");

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
          </div>
        );
      })}
    </div>
  );
};

export default Product;
