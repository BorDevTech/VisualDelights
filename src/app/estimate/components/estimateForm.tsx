import CustomRadio from "@/components/Radio/Radio";
import { Card, Container } from "@chakra-ui/react";
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
  formDataUpdater: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      address: string;
      bathrooms: string;
      bedrooms: string;
      sqft: string;
    }>
  >;
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

const EstimateForm = ({
  formData,
  formDataUpdater,
  ...props
}: FormRequirements) => {
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    formDataUpdater({ ...formData, [name]: value });
    console.log(value);
  };

  const handleRadioChange = (nextValue: string, name: string) => {
    formDataUpdater((prev) => ({ ...prev, [name]: nextValue }));
  };
  const handleNumberChange = (
    valueAsString: string,
    valueAsNumber: number,
    name: string
  ) => {
    console.log("Value as a number: " + valueAsNumber);
    console.log("Value as a string: " + valueAsString);
    valueAsNumber = Number(valueAsString);
    formDataUpdater((prev) => ({ ...prev, [name]: valueAsNumber }));
  };

  const handleSliderChange = (value: number, name: string) => {
    //average 6 bedroom house has about 4000sqft
    console.log("Value as a slider: " + value);
    formDataUpdater((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container as={Card} w={"33%"} p={"20px 20px"}>
      <Card as={"form"} action="submit"></Card>
      <FormController
        name="firstName"
        formState={formData}
        formInputType={`text`}
        FormUpdater={handleChange}
      />
      <FormController
        name="lastName"
        formState={formData}
        formInputType={`text`}
        FormUpdater={handleChange}
      />
      <FormController
        name="email"
        formInputType={`email`}
        formState={formData}
        FormUpdater={handleChange}
        formHelperMessage="We'll never share your email."
      />
      <FormController
        name="phoneNumber"
        formInputType={`tel`}
        formState={formData}
        FormUpdater={handleChange}
      />

      <FormController
        name="bedrooms"
        formInputType={`radio`}
        formState={formData}
        RadioUpdater={(nextValue) => handleRadioChange(nextValue, "bedrooms")}
      />
      <FormController
        name="bathrooms"
        formInputType={`radio`}
        formState={formData}
        RadioUpdater={(nextValue) => handleRadioChange(nextValue, "bathrooms")}
      />
      <FormController
        name="sqft"
        formInputType={`number`}
        formState={formData}
        NumberUpdater={(valueAsString, valueAsNumber) =>
          handleNumberChange(valueAsString, valueAsNumber, "sqft")
        }
        SliderUpdater={(value) => handleSliderChange(value, "sqft")}
      />

      {/* <FormControl>
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
      </FormControl> */}
    </Container>
  );
};

export default EstimateForm;
