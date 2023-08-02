import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";

const sendEmail = async (email: string, subject: string, message: string) => {
  return axios({
    method: "post",
    url: "/api/sendmail",
    data: {
      email: email,
      subject: subject,
      message: message,
    },
  });
};

const ContactForm = () => {
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  console.log({ responseMessage });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const req = await sendEmail(values.name, values.email, values.message);
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: "Thank you for your message.",
        });
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
      setLoading(false);
    }
  };

  //   const testSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     console.log(values);
  //   };

  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      borderRadius="lg"
      p={8}
      color={useColorModeValue("gray.700", "whiteAlpha.900")}
      shadow="base"
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={3}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <BsPerson />
              </InputLeftElement>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                id="name"
                value={values.name}
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <MdOutlineEmail />
              </InputLeftElement>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={values.email}
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Message</FormLabel>

            <Textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              resize="none"
              id="message"
              value={values.message}
              onChange={handleChange}
            />
          </FormControl>

          <Button
            bg={useColorModeValue("lila.400", "lila.800")}
            color="white"
            _hover={{
              bg: useColorModeValue("lila.500", "lila.600"),
            }}
            width="full"
            type="submit"
          >
            {loading ? "loading" : "Send Message"}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactForm;
