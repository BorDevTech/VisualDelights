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
  Button,
  IconButton,
  Text,
  Container,
  Center,
  AbsoluteCenter,
  Box,
  Heading,
  Skeleton,
  NumberInput,
  NumberInputField,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import React from "react";

export default function page() {
  const apiKey = "AIzaSyBRyZFSdwkBSjmXaC71HHQnxt06iTGkY8E";

  const [value, setValue] = React.useState("1");

  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    bedrooms: "1",
    bathrooms: "1",
  });

  const [formRadio, setFormRadio] = React.useState({
    bathrooms: "1",
    bedrooms: "1",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleRadio = (name: string) => (nextValue: string) => {
    setFormRadio((prev) => ({ ...prev, [name]: nextValue }));
  };

  return (
    <>
      <Center p={"20px 0px"}>
        <Heading size={`md`}>
          Enter your information to generate your estimate.
        </Heading>
      </Center>
      <Stack direction={"row"}>
        <Container as={Card} w={"33%"} p={"20px 20px"}>
          <Box>
            <AbsoluteCenter>Map</AbsoluteCenter>
          </Box>
        </Container>
        <Container as={Card} w={"33%"} p={"20px 20px"}>
          <Box>
            <Heading size={"sm"}>
              <Center>Estimate</Center>
              <Stack>
                <Text>Customer Name:</Text>
                {form?.firstName && form?.lastName !== "" ? (
                  <Text>
                    {form?.firstName} {form?.lastName}
                  </Text>
                ) : (
                  <Skeleton height="20px" />
                )}
                <Text>Email</Text>
                {form?.email !== "" ? (
                  <Text>{form?.email}</Text>
                ) : (
                  <Skeleton height="20px" />
                )}
                <Text>Phone Number</Text>
                {/* {inputValue4[0]. !== 0 ? (
                  <Text>{inputValue4[0]}</Text>
                ) : (
                  <Skeleton height="20px" />
                )} */}

                <Text>Address</Text>
                {form?.address !== "" ? (
                  <Text>{form?.address}</Text>
                ) : (
                  <Skeleton height="20px" />
                )}
                <Text>Address Descriptor</Text>
                {formRadio?.bedrooms !== "" ? (
                  <Text>{formRadio?.bedrooms}</Text>
                ) : (
                  <Skeleton height="20px" />
                )}
                {formRadio?.bathrooms !== "" ? (
                  <Text>{formRadio?.bathrooms}</Text>
                ) : (
                  <Skeleton height="20px" />
                )}
              </Stack>
            </Heading>
          </Box>
        </Container>
        <Container as={Card} w={"33%"} p={"20px 20px"}>
          <Card as={"form"} action="submit"></Card>
          <FormControl>
            <FormLabel>
              First Name: {form?.firstName}
              <Input
                name="firstName"
                type="name"
                value={form?.firstName}
                onChange={handleChange}
                size="sm"
              />
            </FormLabel>

            <FormLabel>
              Last Name: {form?.lastName}
              <Input
                name="lastName"
                type="name"
                value={form?.lastName}
                onChange={handleChange}
                size="sm"
              />
            </FormLabel>
            <FormLabel>
              Email Address:{form.email}
              <Input
                name="email"
                type="email"
                value={form?.email}
                onChange={handleChange}
                size="sm"
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormLabel>
            <FormLabel>
              Phone:
              <PinInput type="number">
                <PinInputField />
                {/* {Object.keys(inputValue4).map((key) => (
                  <PinInputField
                    key={key}
                    max={9}
                    onChange={handleChange}
                    value={""}
                  />
                ))} */}
              </PinInput>
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormLabel>
            <FormLabel>
              Bedrooms:
              <RadioGroup
                onChange={(nextValue) => handleRadio("bedrooms")(nextValue)}
                value={value}
              >
                <Stack direction="row">
                  <Radio value="1">First</Radio>
                  <Radio value="2">Second</Radio>
                  <Radio value="3">Third</Radio>
                </Stack>
              </RadioGroup>
            </FormLabel>
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel>
              Bathrooms: {form?.bathrooms}
              <RadioGroup
                onChange={handleRadio}
                value={formRadio?.bathrooms}
                name="bathrooms"
              >
                <IconButton
                  as={Radio}
                  aria-label="Search database"
                  icon={<SearchIcon />}
                  value="1"
                >
                  1
                </IconButton>
                <IconButton
                  as={Radio}
                  aria-label="Search database"
                  icon={<SearchIcon />}
                  value="2"
                >
                  2
                </IconButton>
                <IconButton
                  as={Radio}
                  aria-label="Search database"
                  icon={<SearchIcon />}
                  value="3"
                >
                  3
                </IconButton>
                <CustomRadio />
              </RadioGroup>
            </FormLabel>
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel>
              SqFt:
              <Input type="number" />
            </FormLabel>
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Container>
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
