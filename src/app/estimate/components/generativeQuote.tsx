import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Container,
  Heading,
  Skeleton,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { BiLike, BiChat, BiShare } from "react-icons/bi";

interface FormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    bathrooms: string;
    bedrooms: string;
    sqft: string;
  };
}

const GenerativeQuote = ({ formData, ...props }: FormProps) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    bathrooms,
    bedrooms,
    sqft,
  } = formData;
  return (
    <Container as={Card} w={"33%"} p={"20px 20px"}>
      <Box>
        <Heading size={"sm"}>
          <Center>Estimate</Center>
          <Stack>
            <Text>Customer Name:</Text>
            {firstName !== "" && lastName !== "" ? (
              <Text>
                {firstName} {lastName}
              </Text>
            ) : (
              <Skeleton height="20px" />
            )}
            <Text>Email</Text>
            {email !== "" ? <Text>{email}</Text> : <Skeleton height="20px" />}
            <Text>Phone Number</Text>

            {phoneNumber !== "" ? (
              <Text>{phoneNumber}</Text>
            ) : (
              <Skeleton height="20px" />
            )}

            <Text>Address</Text>
            {address !== "" ? (
              <Text>{address}</Text>
            ) : (
              <Skeleton height="20px" />
            )}
            <Text>Address Descriptor</Text>
            {bedrooms !== "" ? (
              <Text>{bedrooms}</Text>
            ) : (
              <Skeleton height="20px" />
            )}
            {bathrooms !== "" ? (
              <Text>{bathrooms}</Text>
            ) : (
              <Skeleton height="20px" />
            )}
          </Stack>
        </Heading>
      </Box>
      <CardBody>
        <Text>
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
        </Text>
      </CardBody>
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
          Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
          Comment
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
          Share
        </Button>
      </CardFooter>
    </Container>
  );
};

export default GenerativeQuote;
