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
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRadioChange = (nextValue: string, name: string) => {
    setForm((prev) => ({ ...prev, [name]: nextValue }));
  };

  const BathroomRadios: RadioType[] = [
    {
      name: "Bathroom",
      defaultValue: "1",
      radioList: [
        {
          value: "1",
          element: <RiNumber1 />,
        },
        {
          value: "2",
          element: <RiNumber2 />,
        },
        {
          value: "3",
          element: <RiNumber3 />,
        },
        {
          value: "4",
          element: <RiNumber4 />,
        },
        {
          value: "5",
          element: <RiNumber5 />,
        },
        {
          value: "6",
          element: <RiNumber6 />,
        },
      ],
    },
  ];

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
                {form?.bedrooms !== "" ? (
                  <Text>{form?.bedrooms}</Text>
                ) : (
                  <Skeleton height="20px" />
                )}
                {form?.bathrooms !== "" ? (
                  <Text>{form?.bathrooms}</Text>
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
          </FormControl>
          <FormControl>
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
          </FormControl>
          <FormControl>
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
          </FormControl>
          <FormControl>
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
          </FormControl>

          <FormControl>
            <FormLabel>
              Bedrooms:{form.bedrooms}
              <RadioGroup
                onChange={(nextValue) =>
                  handleRadioChange(nextValue, "bedrooms")
                }
                value={form.bedrooms}
              >
                <Stack direction="row">
                  <Radio value="1">1 Bedroom</Radio>
                  <Radio value="2">2 Bedrooms</Radio>
                  <Radio value="3">3 Bedrooms</Radio>
                </Stack>
              </RadioGroup>
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>
              Bathrooms: {form.bathrooms}
              <RadioGroup
                onChange={(nextValue) =>
                  handleRadioChange(nextValue, "bathrooms")
                }
                value={form.bathrooms}
              >
                <CustomRadio />
                <TesterRadio radios={BathroomRadios} />
              </RadioGroup>
            </FormLabel>
          </FormControl>
          <FormControl>
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
