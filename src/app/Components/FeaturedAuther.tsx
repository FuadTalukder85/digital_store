"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import proImg from "../../../public/proImg.png";

const FeaturedAuthor = () => {
  return (
    <section className="bg-secondary py-20 text-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Featured Author
          </h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
            at nulla nulla. Duis posuere ex lacus vitae ultrices.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group cursor-pointer hover:-translate-y-3 transition-transform duration-300"
            >
              <div className="relative">
                <div className="border-4 border-primary/10 group-hover:border-primary/30 rounded-full p-3 shadow-md bg-white transition-all duration-300">
                  <Image
                    src={proImg}
                    alt="Author"
                    width={150}
                    height={150}
                    className="rounded-full"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all duration-300"></div>
              </div>

              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                  Fuad Talukder
                </h4>
                <p className="text-gray-500 text-sm group-hover:text-gray-600">
                  11 Published Books
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuthor;
