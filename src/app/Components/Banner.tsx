import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import heroGirl from "../../../public/heroGirl.png";
import Link from "next/link";

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
      <div className="max-w-7xl mx-auto flex">
        <div className="pt-36">
          <p className="text-secondary capitalize text-lg font-semibold py-5">
            editor choice best books
          </p>
          <h3 className="text-7xl font-semibold">
            Your Next Favorite Book Is Just a{" "}
            <span className="text-secondary">Click Away</span>
          </h3>
          <p className="py-5">
            Sed ac arcu sed felis vulputate molestie. Nullam at urna in velit
            finibus vestibulum euismod A Urna. Sed quis aliquam leo. Duis
            iaculis lorem mauris, et convallis du
          </p>
          <div className="flex gap-5 mt-7">
            <Link href="/Product">
              <button className="flex items-center gap-2 bg-[#e8f5e9] text-primary px-5 py-2 font-semibold rounded-2xl hover:bg-[#0F494D] transition-all duration-300 hover:text-white cursor-pointer disabled:opacity-50">
                Buy Now <BsArrowRight className="text-2xl" />
              </button>
            </Link>
            <Link href="/Product">
              <button className="flex items-center gap-2 bg-primary text-secondary px-5 py-2 font-semibold rounded-2xl hover:bg-secondary transition-all duration-300 hover:text-primary cursor-pointer disabled:opacity-50">
                View All Book <BsArrowRight className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={heroGirl}
            alt="heroGirl"
            width={1500}
            height={1500}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
