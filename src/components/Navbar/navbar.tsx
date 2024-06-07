"use client";

import { HStack, Heading, Divider, GridItem } from "@chakra-ui/layout";
import * as Nav from "./index";

export default function Navbar() {
  return (
    <HStack
      as={GridItem}
      area={"Nav"}
      style={{
        backgroundColor: `pink`,
      }}
      rowSpan={2}
    >
      <Nav.Brand />
      <Divider orientation="vertical" />
      <Nav.Directory />
    </HStack>
  );
}
