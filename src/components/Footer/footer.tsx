"use client";

import { HStack, Heading, Divider, Grid, GridItem } from "@chakra-ui/layout";
import * as Foot from "./index";

const Footer = () => {
  return (
    <Grid
      as={GridItem}
      rowStart={19}
      rowSpan={2}
      // templateAreas={`"sect1" "sect2"`}
      // templateColumns={`repeat(2,1fr)`}
      // templateRows={`repeat(1,1fr)`}
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
