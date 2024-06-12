"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
  Heading,
  Card,
  VStack,
  HStack,
  Button,
  Text,
  CardHeader,
  CardBody,
  Stack,
  CardFooter,
  Divider,
  AbsoluteCenter,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";

import React from "react";
import { MdCheckBox, MdCheckCircle, MdSettings } from "react-icons/md";
const page = () => {
  return (
    <>
      <VStack>
        <Center pt={12} pb={12}>
          <Heading as={`h2`} size={`xl`} p={"8px 0"}>
            Our Pricing Packages
          </Heading>
        </Center>
        <HStack spacing={24}>
          <Card w={80} h={80 * 8.2} boxShadow="0em 0em 6em #6B46C1">
            <CardHeader>
              <Center>
                <Heading as={`h3`} size={`lg`} p={"4px 0"}>
                  Basics Cleaning
                </Heading>
              </Center>
            </CardHeader>
            <Divider />
            <CardBody>
              <Stack>
                <Text>
                  Maintain a consistently clean home with a regular cleaning
                  visit, covering essential tasks like vacuuming, dusting, and
                  bathroom sanitation.
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon color="green.500" as={MdCheckCircle} />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </ListItem>
                  <ListItem>
                    <ListIcon color="green.500" as={MdCheckCircle} />
                    Assumenda, quia temporibus eveniet a libero incidunt
                    suscipit
                  </ListItem>
                  <ListItem>
                    <ListIcon color="green.500" as={MdCheckCircle} />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                  </ListItem>
                  <ListItem>
                    <ListIcon color="green.500" as={MdSettings} />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                  </ListItem>
                </List>
              </Stack>
            </CardBody>
            <Divider />
            <Center>
              <CardFooter>
                <Button>Sign Up</Button>
              </CardFooter>
            </Center>
          </Card>
          <Card w={80} h={80 * 8.2} boxShadow="0em 0em 6em #6B46C1">
            <CardHeader>
              <Center>
                <Heading as={`h3`} size={`lg`} p={"4px 0"}>
                  Deep Cleaning
                </Heading>
              </Center>
            </CardHeader>
            <Divider />
            <CardBody>
              <Stack>
                <Text>
                  Restore your home to its former glory with our meticulous deep
                  cleaning, sanitizing surfaces, and addressing areas often
                  missed in regular cleaning. *Reorganization: Transform your
                  living space into a sanctuary of order and functionality with
                  our expert reorganization services.
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon color="green.500" as={MdCheckCircle} />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </ListItem>
                  <ListItem>
                    <ListIcon color="green.500" as={MdCheckCircle} />
                    Assumenda, quia temporibus eveniet a libero incidunt
                    suscipit
                  </ListItem>
                  <ListItem>
                    <ListIcon color="green.500" as={MdCheckCircle} />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                  </ListItem>
                  <ListItem>
                    <ListIcon color="green.500" as={MdSettings} />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                  </ListItem>
                </List>
              </Stack>
            </CardBody>
            <Divider />
            <Center>
              <CardFooter>
                <Button>Sign Up</Button>
              </CardFooter>
            </Center>
          </Card>
          <Card w={80} h={80 * 8.2} boxShadow="0em 0em 6em #6B46C1">
            <CardHeader>
              <Center>
                <Heading as={`h3`} size={`lg`} p={"4px 0"}>
                  Removal Services
                </Heading>
              </Center>
            </CardHeader>
            <Divider />
            <CardBody>
              <Stack>
                {" "}
                <List spacing={3}>
                  <ListItem>
                    <ListIcon color="green.500" as={MdCheckCircle} />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </ListItem>
                  <ListItem>
                    <ListIcon color="green.500" as={MdCheckCircle} />
                    Assumenda, quia temporibus eveniet a libero incidunt
                    suscipit
                  </ListItem>
                  <ListItem>
                    <ListIcon color="green.500" as={MdCheckCircle} />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                  </ListItem>
                  <ListItem>
                    <ListIcon color="green.500" as={MdSettings} />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                  </ListItem>
                </List>
              </Stack>
            </CardBody>
            <Divider />
            <Center>
              <CardFooter>
                <Button>Sign Up</Button>
              </CardFooter>
            </Center>
          </Card>
        </HStack>
      </VStack>
    </>
  );
};

export default page;
