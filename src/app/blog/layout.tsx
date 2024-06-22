import Navbar from "@/components/Navbar/navbar";
import React from "react";
import type { Metadata } from "next";

export const metadata:Metadata = {title:"Visual Delights | Blog"}

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;