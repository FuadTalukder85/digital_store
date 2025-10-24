import { TLayoutProps } from "@/Types/Types";
import React from "react";

const layout: React.FC<TLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
