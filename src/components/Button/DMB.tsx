"use client";

import { Button, IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { MdBrightness2, MdBrightness5 } from "react-icons/md";

export default function DMB() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      p={"20px 20px"}
      m={"0px 40px"}
      onClick={toggleColorMode}
      aria-label="Darkmode Switch"
      icon={colorMode === "dark" ? <MdBrightness2 /> : <MdBrightness5 />}
      variant={`solid`}
      bgColor={"purple.700"}
      color={"pink"}
      _hover={{
        bgColor: "purple.500",
        color: "pink",
      }}
    >
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </IconButton>
  );
}
