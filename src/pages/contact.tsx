import {
  Box,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  VStack,
  Text,
  Link,
} from "@chakra-ui/react";

import { CONFETTI_LIGHT, CONFETTI_DARK } from "../assets/Icons/confetti";
import ContactForm from "../components/ContactForm/ContactForm";

export default function ContactFormWithSocialButtons() {
  return (
    <Flex
      bg={{
        base: "transparent",
      }}
      align={{ base: "start", lg: "center" }}
      justify="center"
      css={{
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: "fixed",
      }}
      id="contact"
      width={"100%"}
    >
      <Box borderRadius="lg" m={{ base: 0, lg: 2 }} p={{ base: 0, lg: 4 }}>
        <Box>
          <VStack spacing={{ base: 2, md: 4, lg: 8 }}>
            <Box>
              <Heading
                fontSize={{
                  base: "2xl",
                  md: "3xl",
                }}
                textAlign="center"
              >
                Kontaktní formulář
              </Heading>
              <Text textAlign="center" mt={{ base: 2, md: 4 }}>
                Chcete spolupracovat? 📨
                <br />
                Pošlete mi zprávu na{" "}
                <Link
                  href="https://www.linkedin.com/in/marketa-willis/"
                  className="linkUnderline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>{" "}
                nebo přes formulář
              </Text>
            </Box>
            <Stack
              spacing={{ base: 2, md: 4, lg: 8 }}
              direction={{ base: "column", md: "row" }}
            >
              <ContactForm />
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
