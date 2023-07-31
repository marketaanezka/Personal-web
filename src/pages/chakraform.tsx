"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { CONFETTI_LIGHT, CONFETTI_DARK } from "../assets/Icons/confetti";

export default function ContactFormWithSocialButtons() {
  return (
    <Flex
      bg={{
        base: "transparent",
        // md: useColorModeValue("gray.100", "gray.900"),
      }}
      align={{ base: "start", lg: "center" }}
      justify="center"
      css={{
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: "fixed",
      }}
      id="contact"
      width={"100%"}
      // className="u-full-height"
    >
      <Box borderRadius="lg" m={{ base: 0, lg: 2 }} p={{ base: 0, lg: 4 }}>
        <Box>
          <VStack spacing={{ base: 2, md: 4, lg: 8 }}>
            <Heading
              fontSize={{
                base: "3xl",
                md: "4xl",
              }}
            >
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 2, md: 4, lg: 8 }}
              direction={{ base: "column", md: "row" }}
            >
              {/* <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              ></Stack> */}

              <Box
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
              >
                <VStack spacing={3}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement>{/* <BsPerson /> */}</InputLeftElement>
                      <Input type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        {/* <MdOutlineEmail /> */}
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
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
                    />
                  </FormControl>

                  <Button
                    bg={useColorModeValue("lila.400", "lila.800")}
                    color="white"
                    _hover={{
                      bg: useColorModeValue("lila.500", "lila.600"),
                    }}
                    width="full"
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
