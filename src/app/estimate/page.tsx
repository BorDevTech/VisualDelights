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
} from "@chakra-ui/react";
import React from "react";

export default function page() {
  const apiKey = "AIzaSyBRyZFSdwkBSjmXaC71HHQnxt06iTGkY8E";

  const [value, setValue] = React.useState("1");

  const [inputValue1, setInputValue1] = React.useState("");
  const [inputValue2, setInputValue2] = React.useState("");
  const [inputValue3, setInputValue3] = React.useState("");
  const handleChange1 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setInputValue1(event.target.value);
  const handleChange2 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setInputValue2(event.target.value);
  const handleChange3 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setInputValue3(event.target.value);

  return (
    <>
      <Card as={Stack} w={"800px"} p={'20px 20px'}>
        <Stack direction={`row`}>
          <FormControl>
            <Stack direction={"row"}>
              <FormLabel>First Name: {inputValue1}</FormLabel>
            </Stack>
            <Input
              type="name"
              value={inputValue1}
              onChange={handleChange1}
              placeholder="Jane/John"
              size="sm"
            />
          </FormControl>
          <FormControl>
            <Stack direction={"row"}>
              <FormLabel>Last Name</FormLabel>

              <Text mb="8px">: {inputValue2}</Text>
            </Stack>
            <Input
              type="name"
              value={inputValue2}
              onChange={handleChange2}
              placeholder="Doe"
              size="sm"
            />
          </FormControl>
        </Stack>

        <FormControl>
          <Stack direction={"row"}>
            <FormLabel>Email Address</FormLabel>
            <span>:{inputValue3}</span>
          </Stack>
          <Input
            type="email"
            value={inputValue3}
            onChange={handleChange3}
            placeholder={`JohnDoe@email.com`}
            size="sm"
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <Stack direction={`row`}>
          <FormControl>
            <FormLabel>Bedrooms</FormLabel>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="1">First</Radio>
                <Radio value="2">Second</Radio>
                <Radio value="3">Third</Radio>
              </Stack>
            </RadioGroup>
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Bathrooms</FormLabel>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="row">
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
              </Stack>
            </RadioGroup>
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Stack>

        <FormControl>
          <FormLabel>SqFt</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </Card>
      {/* <iframe
        src="https://storage.googleapis.com/maps-solutions-6xo3dqwsg4/commutes/mo39/commutes.html"
        width="600"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe> */}
      {/* <script
        async
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=console.debug&libraries=maps,marker&v=beta"
      ></script> */}
      {/* <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRyZFSdwkBSjmXaC71HHQnxt06iTGkY8E&callback=initMap&libraries=places,geometry&solution_channel=GMP_QB_commutes_v2_c"
        async
        defer
      ></script> */}
    </>
  );
}
