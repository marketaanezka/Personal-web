"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import SocialMediaButtons from "../../components/SocialMediaButtons/socialMediaButtons";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Box w={120}>
          {/* 
        @TODO
        tady bude logo? */}
        </Box>
        <Text fontSize="xs">© 2023 with 🫶 by Marketa Willis</Text>
        <Stack direction="row" spacing={2}>
          <SocialMediaButtons />
        </Stack>
      </Container>
    </Box>
  );
}
