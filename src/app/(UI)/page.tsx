import React from "react";
import Banner from "../Components/Banner";
import Policy from "../Components/Policy";
import Featured from "../Components/Featured";

const page = () => {
  return (
    <div className="text-secondary">
      <Banner />
      <Policy />
      <Featured />
    </div>
  );
};

export default page;
