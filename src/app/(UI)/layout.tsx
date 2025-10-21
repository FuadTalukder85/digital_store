import React from "react";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
