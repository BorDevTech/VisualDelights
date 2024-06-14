import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  IconButton,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";

import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
function RadioCard({ ...props }) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
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
  );
}
function Example() {
  const options = [
    {
      value: 1,
      element: <RiNumber1 />,
    },
    {
      value: 2,
      element: <RiNumber2 />,
    },
    {
      value: 3,
      element: <RiNumber3 />,
    },
    {
      value: 4,
      element: <RiNumber4 />,
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "bedrooms",
    defaultValue: "1",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value.value} {...radio}>
            {value.element}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

export default function CustomRadio() {
  return <Example />;
}
