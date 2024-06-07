"use client";

import { Heading } from "@chakra-ui/layout";
import React from "react";

import { Playball } from "next/font/google";
import { Link } from "@chakra-ui/next-js";

const playball = Playball({
  weight: "400",
  preload: true,
  subsets: ["latin"],
});

export default function Brand() {
  return (
    <Heading
      as={"h1"}
      style={{
        ...playball.style,
        padding: "0px 20px ",
      }}
    >
      <Link href="/" color={`deeppink`}>
        Visual Delights
      </Link>
    </Heading>
  );
}
