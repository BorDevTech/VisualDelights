"use client";

import { HStack, Heading, Divider, Grid, GridItem } from "@chakra-ui/layout";
import * as Foot from "./index";

const Footer = () => {
  return (
    <Grid
      as={GridItem}
      area={"Footer"}
      rowSpan={2}
      colSpan={1}
      // templateAreas={`"sect1" "sect2"`}
      // templateColumns={`repeat(2,1fr)`}
      // templateRows={`repeat(1,1fr)`}
      h={"12.5vh"}
      style={{
        backgroundColor: `pink`,
      }}
    >
      <GridItem area={`sect1`} colSpan={1} rowSpan={1} h={"100%"}>
        dwawa
      </GridItem>
      <GridItem area={`sect2`} colSpan={1} rowSpan={1} h={"100%"}>
        dwawa
      </GridItem>
    </Grid>
  );
};

export default Footer;
