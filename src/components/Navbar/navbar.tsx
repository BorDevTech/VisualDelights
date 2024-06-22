import { HStack, Spacer, GridItem } from "@chakra-ui/layout";
import * as Nav from "./index";
import DMB from "@/components/Button/DMB";
import { Show } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <HStack as={GridItem} bg={`pink`} rowStart={1} rowSpan={2} colSpan={1}>
      <Nav.Brand />
      <Show above="lg">
        <Spacer />
        <Nav.Directory />
        <DMB />
      </Show>
    </HStack>
  );
}
