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
  useToast,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import axios from "axios";
import React, { useState } from "react";
import useContactForm from "../../hooks/useContactForm";

const sendEmail = async (name: string, email: string, message: string) => {
  return axios({
    method: "post",
    url: "/api/sendmail",
    data: {
      name: name,
      email: email,
      message: message,
    },
  });
};
const ContactForm = () => {
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });
  const { values, handleChange, resetValues } = useContactForm();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const showSuccessToast = () =>
    toast({
      title: "Děkuji 🎉",
      description: "Zpráva byla odeslána",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

  const showErrorToast = () =>
    toast({
      title: "Ooops 😬",
      description: "Něco se pokazilo, zkuste to znovu.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });

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
        showSuccessToast();
        resetValues();
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
      setLoading(false);
      showErrorToast();
      resetValues();
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
            <FormLabel>Jméno</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <BsPerson />
              </InputLeftElement>
              <Input
                type="text"
                name="name"
                placeholder="Kamil Novák"
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
                placeholder="kamil@novak.cz"
                value={values.email}
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Zpráva</FormLabel>

            <Textarea
              name="message"
              placeholder="Vaše zpráva"
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
            isLoading={loading}
          >
            Odeslat
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactForm;
