import Link from "next/link";
import styles from "./FeaturedPitch.module.scss";
import { Box, Text, Heading, Avatar, Flex, Button } from "@chakra-ui/react";
import { ExternalLink } from "../../../assets/Icons/icons";

const FeaturedPitch = () => {
  return (
    <section className={styles.wrapper}>
      <Link href="/media">
        {" "}
        <h2 className={styles.heading}>Média</h2>
      </Link>

      <Box opacity={0.75}>Kde mě můžete slyšet nebo si přečíst rozhovor</Box>

      <Box mt={4}>
        <iframe
          title="junior guru podcast on apple podcasts"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="175"
          style={{
            width: "100%",
            maxWidth: "950px",
            overflow: "hidden",
            borderRadius: "10px",
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.podcasts.apple.com/cz/podcast/6-mark%C3%A9ta-willis-applifting-o-jej%C3%AD-cest%C4%9B-k-it-a/id1603653549?i=1000566466352"
        ></iframe>
      </Box>
      <Flex
        gap={{ base: 0, lg: 12 }}
        mt={4}
        direction={{ base: "column", lg: "row" }}
      >
        <Box my={4}>
          <Link
            href="https://www.wdf.cz/blog/se-zapojenim-do-komunit-bych-nevahala-radi-juniorum-vyvojarka-willis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Flex align="center" mt="0.5">
              <Avatar src="/img/wdf.png" marginRight="0.5rem" size="xs" />
              <Heading size="sm">
                <span className="linkUnderline">
                  Se zapojením do komunit bych neváhala
                </span>
              </Heading>
              <ExternalLink ml={2} />
            </Flex>
          </Link>
          <Text mt={2}>
            Rozhovor pro firmu WDF v rámci spolupráce s reactgirls, kdy jsem na
            meetupu měla přednášku o faktorech, které je potřeba zvážit při
            výběru práce.
          </Text>
        </Box>
        <Box my={4}>
          <Link
            href="https://applifting.io/blog/a-pedagogue-turned-developer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Flex align="center" mt="0.5">
              <Avatar
                src="/img/applifting.png"
                marginRight="0.5rem"
                size="xs"
              />
              <Heading size="sm">
                <span className="linkUnderline">
                  How did I find my way to IT?
                </span>
              </Heading>
              <ExternalLink ml={2} />
            </Flex>
          </Link>
          <Text mt={2}>
            Rozhovor v angličtině na blog firmy Applifting. Bavíme se o tom, co
            mi dala zahraniční zkušenost, o problémech juniorů v IT nebo o
            imposter syndromu.
          </Text>
        </Box>
      </Flex>

      <Button colorScheme={"purple"} as="a" href="/media" mb={6} mt={4}>
        Všechna media
      </Button>
    </section>
  );
};

export default FeaturedPitch;
