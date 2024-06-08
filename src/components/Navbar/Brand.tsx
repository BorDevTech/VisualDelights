"use client";

import { Heading, Flex, Stack, Image, Box, Text } from "@chakra-ui/react";
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
    <Stack direction={`row`} align={`center`} color={`darkviolet`}>
      <Link href={`/`}>
        <Image
          src={imager.src}
          alt="Butterfly"
          w={`100px`}
          margin={`0 0 0 10px`}
          padding={`10px 10px`}
        />
      </Link>
      <Link href={`/`} _hover={{ textDecoration: `none` }}>
        <Heading
          as={"h1"}
          size={`3xl`}
          noOfLines={0}
          style={{ ...playball.style }}
          padding={`10px 10px`}
        >
          <Flex>
            Visual Delights
            <sub style={{ alignSelf: `center` }}>
              <Text fontSize={`2xl`}> -cleaning services</Text>{" "}
            </sub>
          </Flex>
        </Heading>
      </Link>
    </Stack>
  );
}
