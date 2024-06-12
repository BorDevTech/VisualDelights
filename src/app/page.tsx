"use client";

import {
  AbsoluteCenter,
  SimpleGrid,
  Grid,
  GridItem,
  HStack,
  Heading,
  Divider,
  Text,
  Box,
  Center,
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
      <GridItem bg={`transparent`} rowStart={3} rowSpan={16}>
        <AbsoluteCenter>
          <CallToAction />
        </AbsoluteCenter>
      </GridItem>
    </Grid>
  );
}
