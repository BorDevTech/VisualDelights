"use client";

import {
  AbsoluteCenter,
  Grid,
  GridItem,
  HStack,
  Heading,
  Divider,
  Text,
  Box,
  Button,
  ButtonGroup,
  Card,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

import CallToAction from "@/components/CTA/CallToAction";

export default function Home() {
  return (
    <Grid templateRows={`repeat(20,1fr)`} h={"100vh"}>
      <Navbar />
      <GridItem bg={`transparent`} rowSpan={16}>
        <GridItem rowStart={3} rowSpan={16}>
          <Text>
            Indulge in the tranquility of a pristine home with Visual Delights'
            comprehensive cleaning and reorganization services. From simple
            weekly maid services to thorough big cleanups and deep cleaning, we
            have meticulously curated a range of options to cater to your every
            need.
          </Text>
          <CallToAction />
        </GridItem>
      </GridItem>
      <Footer />
    </Grid>
  );
}
