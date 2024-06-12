import {
  Card,
  CardHeader,
  Center,
  Heading,
  Divider,
  CardBody,
  Stack,
  List,
  ListItem,
  ListIcon,
  CardFooter,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle, MdSettings } from "react-icons/md";

interface PkgDetails {
  PkgName: string;
  Desc: string;
  ListItems?: {
    LI1?: string;
    LI2?: string;
    LI3?: string;
    LI4?: string;
    LI5?: string;
  };
}

const PackageCard = ({ PkgName, Desc, ListItems }: PkgDetails) => {
  return (
    <Card w={80} h={80 * 8.2} boxShadow="0em 0em 6em #6B46C1">
      <CardHeader>
        <Center>
          <Heading as={`h3`} size={`lg`} p={"4px 0"}>
            {PkgName}
          </Heading>
        </Center>
      </CardHeader>
      <Divider />
      <CardBody>
        <Stack>
          <Text>{Desc}</Text>
          <List spacing={3}>
            {Object.values(ListItems || {}).map((item, index) => (
              <ListItem key={index}>
                <ListIcon as={MdCheckCircle} color="green.500" />
                {item}
              </ListItem>
            ))}
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
  );
};

export default PackageCard;
