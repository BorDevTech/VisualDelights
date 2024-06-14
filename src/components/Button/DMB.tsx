"use client";

import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export default function DMB() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
}
