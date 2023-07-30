import Link from "next/link";
import Image from "next/image";
import juniorguru from "../../../public/img/juniorguru.png";
import wdf from "../../../public/img/wdf.png";
import styles from "./FeaturedPitch.module.scss";
import heroine from "../../../public/img/heroine.png";
import { Box, Text, Heading, Avatar, Flex } from "@chakra-ui/react";
import { ExternalLink } from "../../../assets/Icons/icons";

const FeaturedPitch = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Média</h2>
      <Text mb={4}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        eveniet quos temporibus.
      </Text>
      <Flex align="center" my={2}>
        <Heading size="sm">Junior Guru podcast</Heading>
      </Flex>
      {/* <iframe
        src="https://open.spotify.com/embed/episode/0IWgQHavpmoMa3TJI6w2w6?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: "12px" }}
      ></iframe> */}
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
      <Link href="/media" className={styles.link}>
        Read more &#x2192;
      </Link>
    </section>
  );
};

export default FeaturedPitch;
