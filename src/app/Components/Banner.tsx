"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import heroGirl from "../../../public/heroGirl.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/bg_img.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=""
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* left content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-secondary capitalize text-lg font-semibold py-5">
            editor choice best books
          </p>
          <h3 className="text-5xl md:text-7xl font-semibold">
            Your Next Favorite Book Is Just a{" "}
            <span className="text-secondary">Click Away</span>
          </h3>
          <p className="py-5 text-secondary">
            Sed ac arcu sed felis vulputate molestie. Nullam at urna in velit
            finibus vestibulum euismod A Urna. Sed quis aliquam leo. Duis
            iaculis lorem mauris, et convallis du
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-7">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/Product">
                <button className="flex items-center gap-2 bg-[#e8f5e9] text-primary px-5 py-2 font-semibold rounded-2xl hover:bg-[#0F494D] transition-all duration-300 hover:text-white cursor-pointer">
                  Buy Now <BsArrowRight className="text-2xl" />
                </button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/Product">
                <button className="flex items-center gap-2 bg-primary text-secondary px-5 py-2 font-semibold rounded-2xl hover:bg-secondary transition-all duration-300 hover:text-primary cursor-pointer">
                  View All Book <BsArrowRight className="text-2xl" />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="mt-10 md:mt-0 md:w-1/2"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={heroGirl}
            alt="heroGirl"
            width={1500}
            height={1500}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
