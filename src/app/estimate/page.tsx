"use client";
import CustomRadio from "@/components/Radio/Radio";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Stack,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Card,
  Radio,
  RadioGroup,
  IconButton,
  Text,
  Container,
  Center,
  AbsoluteCenter,
  Box,
  Heading,
  Skeleton,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import React from "react";
import TesterRadio, { RadioType } from "./components/test";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";
import InteractiveMap from "./components/interactiveMap";
import GenerativeQuote from "./components/generativeQuote";
import EstimateForm from "./components/estimateForm";

export default function page() {
  const apiKey = "AIzaSyBRyZFSdwkBSjmXaC71HHQnxt06iTGkY8E";
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    bathrooms: "1",
    bedrooms: "1",
    sqft: "0",
  });

  return (
    <>
      <Center p={"20px 0px"}>
        <Heading size={`md`}>
          Enter your information to generate your estimate.
        </Heading>
      </Center>
      <Stack direction={"row"}>
        <InteractiveMap />
        <GenerativeQuote formData={form} />
        <EstimateForm formData={form} formDataUpdater={setForm} />
      </Stack>
    </>
  );
}

{
  /* <iframe
        src="https://storage.googleapis.com/maps-solutions-6xo3dqwsg4/commutes/mo39/commutes.html"
        width="600"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe> */
}
{
  /* <script
        async
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=console.debug&libraries=maps,marker&v=beta"
      ></script> */
}
{
  /* <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRyZFSdwkBSjmXaC71HHQnxt06iTGkY8E&callback=initMap&libraries=places,geometry&solution_channel=GMP_QB_commutes_v2_c"
        async
        defer
      ></script> */
}
