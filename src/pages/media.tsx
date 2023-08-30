// https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-instagramembed--main-example

import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
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
    <Box my={10}>
      <Link href={externalLink} target="_blank">
        <Flex align="center" mt="0.5">
          <Avatar src={avatar} marginRight="0.5rem" size="xs" />
          <Heading size="md">
            <span className="linkUnderline">{heading}</span>
          </Heading>
          <ExternalLink ml={2} />
        </Flex>
      </Link>
      <Text mt={2}>{description}</Text>
    </Box>
  );
};

const Media = () => {
  return (
    <Box>
      <Heading size="lg">Média</Heading>
      <Text mt={3} mb={6} opacity={0.7}>
        Díky své online aktivitě a networkingu jsem měla možnost spolupracovat s
        různými IT firmami a komunitami 💜. Vznikly zajímavé články i podcasty o
        mé cestě do IT, o tom, s čím se junioři v začátcích často potýkají nebo
        na co je dobré se zaměřit při hledání práce jako &#34;switcher&#34; do
        IT.
      </Text>
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
