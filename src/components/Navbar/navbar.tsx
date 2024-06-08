"use client";

import { HStack, Heading, Spacer, GridItem } from "@chakra-ui/layout";
import * as Nav from "./index";

export default function Navbar() {
  return (
    <HStack
      as={GridItem}
      style={{
        backgroundColor: `pink`,
      }}
      rowStart={1}
      rowSpan={2}
      colSpan={1}
    >
      <Nav.Brand />
      <Nav.Directory />
    </HStack>
  );
}
