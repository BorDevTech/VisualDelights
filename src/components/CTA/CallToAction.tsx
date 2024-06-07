import {
  ButtonGroup,
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
    <Card as={GridItem} colStart={3} rowStart={3} colSpan={4} rowSpan={4}>
      <Grid
        templateColumns={`repeat(4,1fr)`}
        templateRows={`repeat(2,1fr)`}
        h={"50px"}
      >
        <Text as={GridItem} rowSpan={1} colSpan={4}>
          Contact Visual Delights today! Get a personalized consultation and let
          us create a home that reflects your aspirations for a life of comfort,
          serenity, and organization!
        </Text>
        <ButtonGroup as={GridItem} rowStart={2} colSpan={2} colStart={2}>
          <Button>Contact Us</Button>
          <Spacer />
          <Button>See Pricing</Button>
        </ButtonGroup>
      </Grid>
    </Card>
  );
};

export default CallToAction;
