import Navbar from "@/components/Navbar/navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Site created by BorDevTech",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Grid templateRows={`repeat(20,1fr)`} h={"100vh"}>
      <Navbar />
      <GridItem bg={`transparent`} rowStart={3} rowSpan={16}>
        {children}
      </GridItem>
    </Grid>
  );
}
