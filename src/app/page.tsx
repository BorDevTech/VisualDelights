"use client";

import {
  AbsoluteCenter,
  Grid,
  GridItem,
  HStack,
  Heading,
  Divider,
  Text,
  Button,
  ButtonGroup,
  Card,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <GridItem area={`sect1`} colSpan={1} rowSpan={1}>
        <Text>
          Indulge in the tranquility of a pristine home with Visual Delights'
          comprehensive cleaning and reorganization services. From simple weekly
          maid services to thorough big cleanups and deep cleaning, we have
          meticulously curated a range of options to cater to your every need.
        </Text>
      </GridItem>
      <GridItem area={`sect2`} colSpan={1} rowSpan={1}>
        <AbsoluteCenter>
          <Card w={"50vw"}>
            <Text alignContent={`center`} justifyContent={`center`}>
              Contact Visual Delights today! Get a personalized consultation and
              let us create a home that reflects your aspirations for a life of
              comfort, serenity, and organization!
            </Text>
            <ButtonGroup alignItems={`center`}>
              <Button>Contact Us</Button>
              <Divider orientation="vertical" />
              <Button>See Pricing</Button>
            </ButtonGroup>
          </Card>
        </AbsoluteCenter>
      </GridItem>
    </>
  );
}
