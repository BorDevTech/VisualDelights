"use client";

import { Heading, Flex, Stack, Image, Text, Show } from "@chakra-ui/react";
import React from "react";

import { Link } from "@chakra-ui/next-js";
import imager from "../../app/visualDelights.png";
import { playball } from "@/app/fonts";

export default function Brand() {
  return (
    <Stack
      direction={{ md: "column", lg: `row` }}
      align={`center`}
      color={`purple.600`}
    >
      <Link
        href={`/`}
        children={
          <>
            <Show above="lg">
              <Image
                src={imager.src}
                alt="Butterfly"
                w={{ lg: `100px` }}
                margin={`0 0 0 10px`}
                padding={{ lg: `10px 10px` }}
              ></Image>
            </Show>
            <Show below="lg">
              <Image
                src={imager.src}
                alt="Butterfly"
                w={`80px`}
                margin={`0 0 0 10px`}
                padding={{ lg: `10px 10px` }}
              />
            </Show>
          </>
        }
      >
        {/* <Image
          src={imager.src}
          alt="Butterfly"
          w={{ lg: `100px` }}
          margin={`0 0 0 10px`}
          padding={{ lg: `10px 10px` }}
        /> */}
      </Link>
      <Link
        href={`/`}
        _hover={{ textDecoration: `none` }}
        children={
          <>
            <Show above="lg">
              <Heading
                as={"h1"}
                size={{ md: "4xl", lg: `3xl` }}
                noOfLines={0}
                style={playball?.style}
                padding={`10px 10px`}
              >
                <Show above="lg">
                  <Flex>
                    Visual Delights
                    <sub style={{ alignSelf: `center` }}>
                      <Text fontSize={"2xl"}> -cleaning services</Text>
                    </sub>
                  </Flex>
                </Show>

                <Show below="lg">
                  <Flex>
                    Visual Delights
                    <Text fontSize={"2xl"}> -cleaning services</Text>
                  </Flex>
                </Show>
              </Heading>
            </Show>
            <Show below="lg">
              <Heading
                as={"h1"}
                size={`2xl`}
                noOfLines={0}
                style={playball?.style}
                padding={`25px `}
                margin={0}
                justifySelf={`center`}
              >
                Visual Delights
                <sub style={{ alignSelf: `center`, padding: 0, margin: 0 }}>
                  <Text fontSize={"2xl"}> -cleaning services</Text>
                </sub>
              </Heading>
            </Show>
          </>
        }
      ></Link>
    </Stack>
  );
}
