import CustomRadio from "@/components/Radio/Radio";
import {
  Card,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  Stack,
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
import TesterRadio, { RadioType } from "./test";
import FormController from "../Logic/formController";

interface FormRequirements {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    bathrooms: string;
    bedrooms: string;
    sqft: string;
  };
}

const BathroomRadios: RadioType[] = [
  {
    name: "Bathroom",
    defaultValue: "1",
    radioList: [
      {
        value: "1",
        element: <RiNumber1 />,
      },
      {
        value: "2",
        element: <RiNumber2 />,
      },
      {
        value: "3",
        element: <RiNumber3 />,
      },
      {
        value: "4",
        element: <RiNumber4 />,
      },
      {
        value: "5",
        element: <RiNumber5 />,
      },
      {
        value: "6",
        element: <RiNumber6 />,
      },
    ],
  },
];

const EstimateForm = ({ formData, ...props }: FormRequirements) => {
  const [formState, setFormState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    bathrooms: "1",
    bedrooms: "1",
    sqft: "0",
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleRadioChange = (nextValue: string, name: string) => {
    setFormState((prev) => ({ ...prev, [name]: nextValue }));
  };

  return (
    <Container as={Card} w={"33%"} p={"20px 20px"}>
      <Card as={"form"} action="submit"></Card>
      <FormController
        name="firstName"
        formState={formState}
        formInputType={`text`}
        FormUpdater={handleChange}
      />
      <FormController
        name="lastName"
        formState={formState}
        formInputType={`text`}
        FormUpdater={handleChange}
      />
      <FormController
        name="email"
        formInputType={`email`}
        formState={formState}
        FormUpdater={handleChange}
        formHelperMessage="We'll never share your email."
      />
      <FormController
        name="phoneNumber"
        formInputType={`tel`}
        formState={formState}
        FormUpdater={handleChange}
      />

      <FormController
        name="bedrooms"
        formInputType={`radio`}
        formState={formState}
        RadioUpdater={(nextValue) => handleRadioChange(nextValue, "bedrooms")}
      />
      <FormController
        name="bathrooms"
        formInputType={`radio`}
        formState={formState}
        RadioUpdater={(nextValue) => handleRadioChange(nextValue, "bathrooms")}
      />
      <FormController
        name="sqft"
        formInputType={`text`}
        formState={formState}
        FormUpdater={handleChange}
      />

      <FormControl>
        <FormLabel>
          Bathrooms: {formState?.bathrooms}
          <RadioGroup
            onChange={(nextValue) => handleRadioChange(nextValue, "bathrooms")}
            value={formState?.bathrooms}
          >
            <CustomRadio />
            <TesterRadio radios={BathroomRadios} />
          </RadioGroup>
        </FormLabel>
      </FormControl>
    </Container>
  );
};

export default EstimateForm;
