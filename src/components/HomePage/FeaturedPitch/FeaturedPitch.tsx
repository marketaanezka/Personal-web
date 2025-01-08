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
        {/* <iframe
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
        ></iframe> */}
        <iframe
          style={{
            width: "100%",
            maxWidth: "950px",
            overflow: "hidden",
            background: "transparent",
          }}
          src="https://open.spotify.com/embed/episode/3o3UOtI81b86VA6kJ6DS30?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </Box>
      <Flex
        gap={{ base: 0, lg: 12 }}
        mt={4}
        direction={{ base: "column", lg: "row" }}
      >
        <Box my={4}>
          <Link
            href="https://archiv.hn.cz/c1-67418180-pouhy-zivotopis-bez-kontextu-uz-firmy-neoslovi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Flex align="center" mt="0.5">
              <Avatar src="/img/hn-button.svg" marginRight="0.5rem" size="xs" />
              <Heading size="sm">
                <span className="linkUnderline">
                  Pouhý životopis bez kontextu už firmy neosloví
                </span>
              </Heading>
              <ExternalLink ml={2} />
            </Flex>
          </Link>
          <Text mt={2}>
            Rozhovor pro Hospodářské noviny - magazín Nejlepší zaměstnavatelé.
            Tématy jsou hledání práce jako career switcher, pozice ženy v IT a
            jak se vyrovnávat s imposter syndromem.
          </Text>
        </Box>
        <Box my={4}>
          <Link
            href="https://www.e15.cz/byznys/technologie-a-media/my-holky-z-it-proc-maji-zeny-v-cesku-stale-pocit-ze-technologie-jsou-uzavreny-pansky-klub-1418365"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Flex align="center" mt="0.5">
              <Avatar src="/img/e15.jpeg" marginRight="0.5rem" size="xs" />
              <Heading size="sm">
                <span className="linkUnderline">
                  My, holky z IT. Proč mají ženy v Česku stále pocit, že
                  technologie jsou uzavřený pánský klub
                </span>
              </Heading>
              <ExternalLink ml={2} />
            </Flex>
          </Link>
          <Text mt={2}>
            Byla jsem oslovena jako jedna ze tří vlivných žen v IT, abych
            sdílela své zkušenosti z cesty do IT pro magazín e15. Mluvíme o tom,
            jak se ženám daří v IT, jaké jsou překážky a co by měly firmy udělat
            pro to, aby byly pro ženy atraktivnější.
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
