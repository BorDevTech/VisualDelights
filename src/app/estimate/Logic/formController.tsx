import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  RadioGroup,
  Radio,
  Stack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import React from "react";

// Define the full form state type
interface FullFormState {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  bathrooms?: string;
  bedrooms?: string;
  sqft: string;
}
// Use the Pick utility type to create a type that has exactly one property from FullFormState
type SingleFormStateProperty = Pick<FullFormState, keyof FullFormState>;

interface FormControllerProps {
  formState: SingleFormStateProperty;
  FormUpdater?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: keyof FullFormState;
  formInputType:
    | "text"
    | "password"
    | "email"
    | "tel"
    | "checkbox"
    | "radio"
    | "number";
  formHelperMessage?: string;
  RadioUpdater?: (nextValue: string) => void;
}

const FormController = ({
  name,
  formState,
  FormUpdater,
  formInputType,
  formHelperMessage,
  RadioUpdater,
}: FormControllerProps) => {
  // Ensure that the value is a string or an empty string if undefined
  const toReadableLabel = (camelCaseString: string) => {
    const result = camelCaseString.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  const inputValue = formState[name] ?? "";
  return (
    <FormControl>
      <FormLabel>
        {toReadableLabel(name)}: {inputValue}
        {formInputType === "radio" ? (
          <RadioGroup onChange={RadioUpdater} value={inputValue}>
            <Stack direction="row">
              <Radio value="1">1 Bedrooms</Radio>
              <Radio value="2">2 Bedrooms</Radio>
              <Radio value="3">3 Bedrooms</Radio>
            </Stack>
          </RadioGroup>
        ) : formInputType === "number" ? (
          <>
            <NumberInput
              defaultValue={15}
              min={10}
              max={20}
              name={name}
              value={inputValue}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Input onChange={FormUpdater} />
            {formHelperMessage ? (
              <FormHelperText>{formHelperMessage}</FormHelperText>
            ) : null}
          </>
        ) : ["text", "email", "tel"].includes(formInputType) ? (
          <>
            <Input
              name={name}
              type={formInputType}
              value={inputValue}
              onChange={FormUpdater}
              pattern={formInputType === "tel" ? "\\d*" : undefined}
            />
            {formHelperMessage ? (
              <FormHelperText>{formHelperMessage}</FormHelperText>
            ) : null}
          </>
        ) : null}
      </FormLabel>
    </FormControl>
  );
};

export default FormController;
