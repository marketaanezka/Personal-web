import Link from "next/link";
import Image from "next/image";
import juniorguru from "../../../public/img/juniorguru.png";
import wdf from "../../../public/img/wdf.png";
import styles from "./FeaturedPitch.module.scss";
import heroine from "../../../public/img/heroine.png";
import { Box, Text, Heading, Avatar, Flex } from "@chakra-ui/react";
import MediaCard from "../MediaCard/MediaCard";
import { ExternalLink } from "../../assets/Icons/icons";

const FeaturedPitch = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Kde jsem se objevila</h2>
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
      <Box my={4}>
        <Link href="https://www.wdf.cz/blog/se-zapojenim-do-komunit-bych-nevahala-radi-juniorum-vyvojarka-willis">
          <Flex align="center" mt="0.5">
            <Avatar src="/img/wdf.png" marginRight="0.5rem" size="xs" />
            <Heading size="sm">Lorem ipsum dolor sit amet.</Heading>
            <ExternalLink ml={2} />
          </Flex>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis
            quisquam pariatur ipsa aliquam beatae soluta animi dignissimos est
            obcaecati.
          </Text>
        </Link>
      </Box>
      <Link href="/media" className={styles.link}>
        Read more &#x2192;
      </Link>
    </section>
  );
};

export default FeaturedPitch;
