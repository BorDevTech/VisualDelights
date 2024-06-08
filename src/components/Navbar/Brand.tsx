"use client";

import { Heading, Stack, Image, Box } from "@chakra-ui/react";
import React from "react";

import { Playball } from "next/font/google";
import { Link } from "@chakra-ui/next-js";
import imager from "../../app/visualDelights.png";

const playball = Playball({
  weight: "400",
  preload: true,
  subsets: ["latin"],
});

export default function Brand() {
  return (
    <Stack direction={`row`} align={`center`}>
      <Image src={imager.src} w={`100px`} padding={`10px 10px`} />
      <Heading
        as={"h1"}
        size={`3xl`}
        noOfLines={0}
        style={{ ...playball.style }}
        padding={`10px 10px`}
      >
        Visual Delights
      </Heading>
    </Stack>
    // <Stack direction={`row`}>
    //   <Link href="/" color={`deeppink`}>
    //     <Image src={imager.src}></Image>
    //     <Heading
    //       as={"h1"}
    //       style={{
    //         ...playball.style,
    //         padding: "0px 20px ",
    //       }}
    //     >
    //       Visual Delights
    //     </Heading>
    //   </Link>
    // </Stack>
  );
}
