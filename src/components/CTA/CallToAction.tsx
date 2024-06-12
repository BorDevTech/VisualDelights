import { Link } from "@chakra-ui/next-js";
import {
  Button,
  Card,
  Text,
  Center,
  HStack,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import { MdCall, MdOutlineNavigateNext } from "react-icons/md";

const CallToAction = () => {
  return (
    <Card outline={`2px solid`} p={`20px 20px`} maxW="100%">
      <Center>
        <Heading mb={4}>Unveil Your Sanctuary</Heading>
      </Center>
      <Center>
        <Text fontSize="xl">
          Indulge in the unparalleled experience of a truly exceptional cleaning
          and reorganization service. Contact Visual Delights today for a
          personalized consultation and let us create a home that reflects your
          aspirations for a life of comfort, serenity, and organization.
        </Text>
      </Center>

      <Center>
        <HStack spacing={"24px"}>
          <ButtonGroup spacing="2">
            <Button
              size="lg"
              as={Link}
              href={"/estimate"}
              colorScheme={"purple"}
              mt="24px"
              leftIcon={<MdCall />}
            >
              Get a Free Estimate
            </Button>
            <Button
              size="lg"
              as={Link}
              href={"/pricing"}
              colorScheme={"purple"}
              mt="24px"
              rightIcon={<MdOutlineNavigateNext />}
            >
              Browse Packages
            </Button>
          </ButtonGroup>
        </HStack>
      </Center>
    </Card>
  );
};

export default CallToAction;
