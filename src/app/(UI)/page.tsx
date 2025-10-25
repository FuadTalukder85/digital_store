import React from "react";
import Banner from "../Components/Banner";
import Policy from "../Components/Policy";
import Featured from "../Components/Featured";
import FeaturedAuther from "../Components/FeaturedAuther";

const page = () => {
  return (
    <div className="text-secondary">
      <Banner />
      <Policy />
      <Featured />
      <FeaturedAuther />
    </div>
  );
};

export default page;
