"use client";
import { Stack, Heading } from "@chakra-ui/layout";

import { Link } from "@chakra-ui/next-js";
import React, { ReactNode } from "react";

export default function Directory() {
  const DirLinks = [
    { name: "test", href: "/test" },
    { name: "test1", href: "/blog" },
    { name: "test2", href: "/about" },
  ];
  return (
    <Stack
      direction={`row`}
      spacing={`20px`}
      paddingX={`20px`}
      // style={{
      //   padding: `0px 20px`,
      // }}
    >
      {DirLinks.map((route) => (
        <Link
          key={route.name}
          href={route.href}
          style={{
            textDecoration: `none`,
          }}
        >
          <Heading
            as={"h2"}
            style={{
              color: `deeppink`,
            }}
          >
            {route.name}
          </Heading>
        </Link>
      ))}
    </Stack>
  );
}
