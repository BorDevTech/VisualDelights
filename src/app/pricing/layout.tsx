import Navbar from "@/components/Navbar/navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

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
