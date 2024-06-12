"use client";

import { Heading, Flex, Stack, Image, Text } from "@chakra-ui/react";
import React from "react";

import { Link } from "@chakra-ui/next-js";
import imager from "../../app/visualDelights.png";
import { playball } from "@/app/fonts";

export default function Brand() {
  return (
    <Stack direction={`row`} align={`center`} color={`purple.600`}>
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
          style={playball?.style}
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
