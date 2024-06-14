import Navbar from "@/components/Navbar/navbar";
import React from "react";
import type { Metadata } from "next";

export const metaData: Metadata = {
  title: "Visual Delights | Estimate",
  description: "Site created by BorDevTech",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
