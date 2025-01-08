import {
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  useColorModeValue,
  useToast,
  Flex,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import axios from "axios";
import React, { useState } from "react";
import useContactForm from "../../hooks/useContactForm";

const sendEmail = async (email: string) => {
  return axios({
    method: "post",
    url: "/api/subscribe",
    data: {
      name: email,
      email: email,
      message: email,
    },
  });
};

const EmailForm = () => {
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
      description: "Dám vědět co nejdříve.",
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
      const req = await sendEmail(values.email);
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
    <Box w={["auto", "80"]}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={3}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>

            <InputGroup border={"ButtonFace"}>
              <InputLeftElement>
                <MdOutlineEmail />
              </InputLeftElement>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="joe@email.cz"
                value={values.email}
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Téma konzultace</FormLabel>

            <Textarea
              name="message"
              placeholder=""
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
            type="submit"
            w={"full"}
            isLoading={loading}
            mt={4}
          >
            Objednat konzultaci
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default EmailForm;
