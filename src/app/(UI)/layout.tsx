import React from "react";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";
import { Toaster } from "react-hot-toast";
import { TLayoutProps } from "@/Types/Types";

const layout: React.FC<TLayoutProps> = ({ children }) => {
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
