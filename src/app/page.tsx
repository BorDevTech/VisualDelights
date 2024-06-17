"use client";

import { AbsoluteCenter, Grid, GridItem, Image } from "@chakra-ui/react";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

import CallToAction from "@/components/CTA/CallToAction";

export default function Home() {
  return (
    <Grid
      templateRows={`repeat(20,1fr)`}
      h={"100vh"}
      bgImg={
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    >
      <Navbar />
      <GridItem bg={`transparent`} rowStart={3} rowSpan={19}>
        <Image />
        <AbsoluteCenter>
          <CallToAction />
        </AbsoluteCenter>
      </GridItem>
    </Grid>
  );
}
