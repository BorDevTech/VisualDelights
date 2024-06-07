"use client";

import CallToAction from "@/components/CTA/CallToAction";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Divider,
  Text,
  Button,
  ButtonGroup,
  Card,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <GridItem colSpan={8} rowSpan={1}>
        <Text>
          Indulge in the tranquility of a pristine home with Visual Delights'
          comprehensive cleaning and reorganization services. From simple weekly
          maid services to thorough big cleanups and deep cleaning, we have
          meticulously curated a range of options to cater to your every need.
        </Text>
      </GridItem>
      <CallToAction />
    </>
  );
}
