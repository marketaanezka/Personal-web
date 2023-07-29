import Link from "next/link";
import Image from "next/image";
import juniorguru from "../../../public/img/juniorguru.png";
import wdf from "../../../public/img/wdf.png";
import styles from "./FeaturedPitch.module.scss";
import heroine from "../../../public/img/heroine.png";
import { Box, Text, Heading, Avatar, Flex } from "@chakra-ui/react";
import { ExternalLink } from "../../assets/Icons/icons";

const FeaturedPitch = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Média</h2>
      <Text mb={4}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        eveniet quos temporibus.
      </Text>
      <Flex align="center" my={2}>
        <Avatar src="/img/juniorguru.png" marginRight="0.5rem" size="xs" />
        <Heading size="sm">Junior Guru podcast</Heading>
      </Flex>
      <iframe
        src="https://open.spotify.com/embed/episode/0IWgQHavpmoMa3TJI6w2w6?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: "12px" }}
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
              <Heading size="sm">Se zapojením do komunit bych neváhala</Heading>
              <ExternalLink ml={2} />
            </Flex>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              officiis quisquam pariatur ipsa aliquam beatae soluta animi
              dignissimos est obcaecati.
            </Text>
          </Link>
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
              <Heading size="sm">A pedagogue-turned-developer</Heading>
              <ExternalLink ml={2} />
            </Flex>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              officiis quisquam pariatur ipsa aliquam beatae soluta animi
              dignissimos est obcaecati.
            </Text>
          </Link>
        </Box>
      </Flex>
      <Link href="/media" className={styles.link}>
        Read more &#x2192;
      </Link>
    </section>
  );
};

export default FeaturedPitch;
