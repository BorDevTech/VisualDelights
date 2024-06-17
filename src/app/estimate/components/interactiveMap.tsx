import { AbsoluteCenter, Box, Card, Container } from "@chakra-ui/react";
import React from "react";

const InteractiveMap = () => {
  return (
    <Container as={Card} w={"33%"} p={"20px 20px"}>
      <Box>
        <AbsoluteCenter>Map</AbsoluteCenter>
      </Box>
    </Container>
  );
};

export default InteractiveMap;
