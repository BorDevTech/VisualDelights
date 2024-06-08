import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              The Basics
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Maintain a consistently clean home with our regular cleaning visits,
          covering essential tasks like vacuuming, dusting, and bathroom
          sanitation.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Deep Cleaning
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Restore your home to its former glory with our meticulous deep
          cleaning, sanitizing surfaces, and addressing areas often missed in
          regular cleaning. *Reorganization: Transform your living space into a
          sanctuary of order and functionality with our expert reorganization
          services.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default page;
