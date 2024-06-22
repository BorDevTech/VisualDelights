"use client";
import { Stack, Heading } from "@chakra-ui/layout";

import { Link } from "@chakra-ui/next-js";
import { Show } from "@chakra-ui/react";
export default function Directory() {
  const DirLinks = [
    { name: "about", href: "/about" },
    { name: "blog", href: "/blog" },
    { name: "contact", href: "/contact" },
  ];
  return (
    <Stack
      direction={`row`}
      spacing={`20px`}
      paddingX={`20px`}
      color={`purple.600`}
    >
      <Show above="lg">
        {DirLinks.map((route) => (
          <Link
            key={route.name}
            href={route.href}
            _hover={{ textDecoration: `none` }}
          >
            <Heading as={"h2"} size={"lg"}>
              {route.name}
            </Heading>
          </Link>
        ))}
      </Show>
    </Stack>
  );
}
