"use client";
import {
  RadioGroup,
  Radio,
  useRadioGroup,
  HStack,
  Box,
  useRadio,
} from "@chakra-ui/react";
import React from "react";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";

export function Test() {
  const [formState, setFormState] = React.useState({
    bedroom: "1",
    bathroom: "1",
  });
  // Handler for changes in the RadioGroup
  const handleRadioChange = (nextValue: string, name: any) => {
    console.log(`Radio selected in group ${name}:`, nextValue);
    setFormState((prevState) => ({
      ...prevState,
      // Update the appropriate state key based on the RadioGroup's name
      // For example, if this handler is for the 'bedroom' RadioGroup:
      [name]: nextValue,
    }));
  };
  return (
    <>
      {formState.bedroom}
      <RadioGroup
        onChange={(nextValue) => handleRadioChange(nextValue, "bedroom")}
        name="bedroom"
        value={formState.bedroom}
      >
        <Radio value="1">1 Bedroom</Radio>
        <Radio value="2">2 Bedrooms</Radio>
        {/* // ... other options */}
      </RadioGroup>
      {formState.bathroom}
      <RadioGroup
        onChange={(nextValue) => handleRadioChange(nextValue, "bathroom")}
        name="bathroom"
        value={formState.bathroom}
      >
        <Radio value="1">1 Bathroom</Radio>
        <Radio value="2">2 Bathrooms</Radio>
      </RadioGroup>
    </>
  );
}

export type RadioType = {
  name: string;
  defaultValue: string;
  radioList: {
    value: string | number;
    element?: JSX.Element;
  }[];
};
export default function TesterRadio({ radios }: { radios: RadioType[] }) {
  const [formState, setFormState] = React.useState({
    bedroom: "1",
    bathroom: "1",
  });
  // Handler for changes in the RadioGroup
  const handleRadioChange = (nextValue: string, name: string) => {
    console.log(`Radio selected in group ${name}:`, nextValue);
    setFormState((prevState) => ({
      ...prevState,
      // Update the appropriate state key based on the RadioGroup's name
      // For example, if this handler is for the 'bedroom' RadioGroup:
      [name]: nextValue,
    }));
  };

  const { name, defaultValue, radioList } = radios[0];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
  });

  const group = getRootProps();

  return (
    <>
      <HStack {...group}>
        {radioList.map((radioItem) => {
          const radio = getRadioProps({ radioItem });
          return (
            <RadioButton key={radioItem?.value} {...radio}>
              {radioItem?.element}
            </RadioButton>
          );
        })}
      </HStack>
    </>
  );
}

const RadioButton = ({ ...props }) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();
  return (
    <>
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _checked={{
            bg: "teal.600",
            color: "white",
            borderColor: "teal.600",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    </>
  );
};
