import {
  Box,
  Card,
  Center,
  Container,
  Heading,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface FormProps {
  form: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    bathrooms: string;
    bedrooms: string;
  };
}

const GenerativeQuote = ({ form, ...props }: FormProps) => {
  return (
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
  );
};

export default GenerativeQuote;
