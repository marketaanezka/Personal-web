import Link from "next/link";
import styles from "./FeaturedPitch.module.scss";
import { Box, Text, Heading, Avatar, Flex } from "@chakra-ui/react";
import { ExternalLink } from "../../../assets/Icons/icons";
import PitchHeading from "../../PitchHeading/PitchHeading";

const FeaturedPitch = () => {
  return (
    <section className={styles.wrapper}>
      <PitchHeading
        heading="Média"
        linkUrl="/media"
        linkText="Na čtení i poslech"
      />
      {/* <Flex align="center" my={2}>
        <Heading size="sm">Junior Guru podcast</Heading>
      </Flex> */}
      <iframe
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
      <Flex
        gap={{ base: 0, lg: 6 }}
        mt={4}
        direction={{ base: "column", lg: "row" }}
      >
        <Box my={4}>
          <Link
            href="https://www.wdf.cz/blog/se-zapojenim-do-komunit-bych-nevahala-radi-juniorum-vyvojarka-willis"
            target="_blank"
          >
            <Flex align="center" mt="0.5">
              <Avatar src="/img/wdf.png" marginRight="0.5rem" size="xs" />
              <Heading size="sm" className="linkUnderline">
                Se zapojením do komunit bych neváhala
              </Heading>
              <ExternalLink ml={2} />
            </Flex>
          </Link>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis
            quisquam pariatur ipsa aliquam beatae soluta animi dignissimos est
            obcaecati.
          </Text>
        </Box>
        <Box my={4}>
          <Link
            href="https://applifting.io/blog/a-pedagogue-turned-developer"
            target="_blank"
          >
            <Flex align="center" mt="0.5">
              <Avatar
                src="/img/applifting.png"
                marginRight="0.5rem"
                size="xs"
              />
              <Heading size="sm" className="linkUnderline">
                How did I find my way to IT?
              </Heading>
              <ExternalLink ml={2} />
            </Flex>
          </Link>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis
            quisquam pariatur ipsa aliquam beatae soluta animi dignissimos est
            obcaecati.
          </Text>
        </Box>
      </Flex>
    </section>
  );
};

export default FeaturedPitch;
