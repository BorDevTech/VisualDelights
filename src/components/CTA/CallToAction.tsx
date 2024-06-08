import {
  Stack,
  Button,
  GridItem,
  Spacer,
  Card,
  Text,
  Grid,
} from "@chakra-ui/react";
import React from "react";

const CallToAction = () => {
  return (
    <Card>
      <Text>
        Contact Visual Delights today! Get a personalized consultation and let
        us create a home that reflects your aspirations for a life of comfort,
        serenity, and organization!
      </Text>
      <Stack direction={`row`}>
        <Button size={`md`}>Contact Us</Button>
        <Spacer />
        <Button size={`md`}>See Pricing</Button>
      </Stack>
    </Card>
  );
};

export default CallToAction;
