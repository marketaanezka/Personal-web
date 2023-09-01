"use client";

import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import SocialMediaButtons from "../../components/SocialMediaButtons/SocialMediaButtons";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      height={{ base: "12.5rem", md: "7.5rem" }}
      display="flex"
      flexDirection={"column"}
      justifyContent={"end"}
    >
      {/* <Flex
        p={4}
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        Chcete spolupracovat?{" "}
        <Link href="/contact">
          <Text as="b" mx={2} className="linkUnderline">
            Pošlete mi zprávu 💌
          </Text>
        </Link>
      </Flex> */}
      <Flex
        p={4}
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "baseline" }}
        justifyContent="center"
        opacity={0.8}
      >
        <Text fontFamily="Rowdies" fontWeight="lighter">
          Be yourself, everyone else is taken.
        </Text>
        <Text mx={2} fontSize="sm">
          {" "}
          - Oscar Wilde
        </Text>
      </Flex>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text fontSize="sm">
          ©2023 with 🫶
          {/* &{" "}
          <Link href="/contact" className="linkUnderline">
            various tech
          </Link>
          ,  */}{" "}
          Markéta Willis
        </Text>
        <Stack direction="row" spacing={2}>
          <SocialMediaButtons />
        </Stack>
      </Container>
    </Box>
  );
}
