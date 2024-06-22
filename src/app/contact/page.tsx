"use client";
import { Stack, Center, Heading } from "@chakra-ui/react";
import React from "react";
import ContactForm from "./components/contactForm";


export default function Contact() {


  return (
    <>
      <Center p={"20px 0px"}>
        <Heading size={`md`}>
        Contact us today using this simple form!

        </Heading>
      </Center>
      <Stack direction={"row"}>
        <ContactForm/>
      </Stack>
    </>
  );
}