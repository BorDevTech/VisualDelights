"use client";

import { Center, Heading, VStack, HStack } from "@chakra-ui/react";

import React from "react";
import PackageCard from "./components/packageCard";
const page = () => {
  return (
    <>
      <VStack>
        <Center pt={12} pb={12}>
          <Heading as={`h2`} size={`xl`} p={"8px 0"}>
            Our Pricing Packages
          </Heading>
        </Center>
        <HStack spacing={24}>
          <PackageCard
            PkgName={"Basic Cleaning"}
            Desc={`  Maintain a consistently clean home with a regular cleaning
                  visit, covering essential tasks like vacuuming, dusting, and
                  bathroom sanitation.
                   `}
            ListItems={{ LI1: ``, LI5: "dwada" }}
          />
          <PackageCard
            PkgName={"Deep Cleaning"}
            Desc={` Restore your home to its former glory with our meticulous deep
                  cleaning, sanitizing surfaces, and addressing areas often
                  missed in regular cleaning.
                   `}
            ListItems={{ LI1: ``, LI5: "dwada" }}
          />
          <PackageCard
            PkgName={"Removal Services"}
            Desc={` Transform your living space into a sanctuary of order and functionality with
                  our expert reorganization services. `}
            ListItems={{ LI1: ``, LI5: "dwada" }}
          />
        </HStack>
      </VStack>
    </>
  );
};

export default page;
