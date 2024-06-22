import FormController from "@/app/estimate/Logic/formController";
import { Card, Container } from "@chakra-ui/react";
import React from "react";



const ContactForm = () => {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  return (
    <Container as={Card} w={"33%"} p={"20px 20px"}>
      <Card as={"form"} action="submit">
        <FormController
          formState={form}
          name={"firstName"}
          formInputType={`text`}
        />
        <FormController
          formState={form}
          name={"lastName"}
          formInputType={`text`}
        />
        <FormController
          formState={form}
          name={"email"}
          formInputType={`email`}
        />
        <FormController
          formState={form}
          name={"phoneNumber"}
          formInputType={`tel`}
        />
        <FormController
          formState={form}
          name={"firstName"}
          formInputType={`text`}
        />
      </Card>
    </Container>
  );
};

export default ContactForm;
