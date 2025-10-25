import Image from "next/image";
import React from "react";
import icon1 from "../../assets/icon/icon1.png";
import icon2 from "../../assets/icon/icon2.png";
import icon3 from "../../assets/icon/icon3.png";
import icon4 from "../../assets/icon/icon4.png";

const Policy = () => {
  return (
    <div className="bg-primary p-5 py-6">
      <div className="max-w-[1300px] mx-auto grid gap-5 grid-cols-1 md:grid-cols-4">
        <div className="">
          <div className="flex gap-5">
            <Image className="h-8" src={icon1} alt="icon1"></Image>
            <h5 className="text-white text-sm">
              <p className="">FREE DELIVERY</p>
              <p>For all orders over $120</p>
            </h5>
          </div>
        </div>
        <div className="">
          <div className="flex gap-5">
            <Image className="h-8" src={icon2} alt="icon1"></Image>
            <h5 className="text-white text-sm">
              <p className="">24/7 HELP CENTER</p>
              <p>Dedicated 24/7 support</p>
            </h5>
          </div>
        </div>
        <div className="">
          <div className="flex gap-5">
            <Image className="h-8" src={icon3} alt="icon1"></Image>
            <h5 className="text-white text-sm">
              <p className="">SATISFIED OR REFUNDED</p>
              <p>Free returns within 14 days</p>
            </h5>
          </div>
        </div>
        <div className="">
          <div className="flex gap-5">
            <Image className="h-8" src={icon4} alt="icon1"></Image>
            <h5 className="text-white text-sm">
              <p className="">100% SECURE PAYMENTS</p>
              <p>Accept all payment methods</p>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
