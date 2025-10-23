import React from "react";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";
import { Toaster } from "react-hot-toast";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
    </div>
  );
};

export default layout;
