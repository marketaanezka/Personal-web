// https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-instagramembed--main-example

import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLink } from "../assets/Icons/icons";
import Link from "next/link";
import { FC } from "react";
import { MediaPosts } from "../data/mediaposts";
import { MediaPost } from "../common/types";

const MediaPost: FC<MediaPost> = ({
  externalLink,
  avatar,
  alt,
  heading,
  description,
}) => {
  return (
    <Box my={16}>
      <Link href={externalLink} target="_blank" rel="noopener noreferrer">
        <Flex align="center" mt="0.5">
          <Avatar src={avatar} marginRight="0.5rem" size="xs" />
          <Heading size="md">
            <span className="linkUnderline">{heading}</span>
          </Heading>
          <ExternalLink ml={2} />
        </Flex>
      </Link>
      <Text mt={4}>{description}</Text>
    </Box>
  );
};

const Media = () => {
  return (
    <Box>
      <Heading size="lg">Média</Heading>
      <Text mt={3} opacity={0.75}>
        Díky své online aktivitě a networkingu jsem měla možnost spolupracovat s
        různými IT firmami a komunitami 💜. Vznikly zajímavé články i podcasty o
        mé cestě do IT, o tom, na co se jako &#34;switcher&#34; zaměřit při
        hledání práce nebo jaké soft skills musí programátoři rozvíjet.
      </Text>
      <Text mt={2}>
        <Text as="span" opacity={0.75}>
          Pokud máte zájem o spolupráci, neváhejte mě kontaktovat
        </Text>
        <Text as="span" ml={1}>
          🤙
        </Text>
      </Text>
      <Button
        as="a"
        href="/contact"
        // colorScheme={"purple"}
        bg={useColorModeValue("lila.400", "lila.800")}
        color="white"
        _hover={{
          bg: useColorModeValue("lila.500", "lila.600"),
        }}
        marginTop={[4, 4, 6]}
        size="sm"
      >
        Kontakt pro spolupráci
      </Button>

      {MediaPosts.map((post) => (
        <MediaPost
          key={post.externalLink}
          externalLink={post.externalLink}
          avatar={post.avatar}
          heading={post.heading}
          description={post.description}
          alt={post.alt}
        />
      ))}
    </Box>
  );
};

export default Media;
