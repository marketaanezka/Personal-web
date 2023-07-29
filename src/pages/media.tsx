// https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-instagramembed--main-example

import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ExternalLink } from "../assets/Icons/icons";
import Link from "next/link";
import { FC } from "react";
import { MediaPosts } from "../data/mediaposts";

interface MediaPostProps {
  externalLink: string;
  avatar: string;
  heading: string;
  description: string;
}

const MediaPost: FC<MediaPostProps> = ({
  externalLink,
  avatar,
  heading,
  description,
}) => {
  return (
    <Box my={4}>
      <Link href={externalLink} target="_blank">
        <Flex align="center" mt="0.5">
          <Avatar src={avatar} marginRight="0.5rem" size="xs" />
          <Heading size="sm">{heading}</Heading>
          <ExternalLink ml={2} />
        </Flex>
        <Text>{description}</Text>
      </Link>
    </Box>
  );
};

const Media = () => {
  return (
    <Box>
      <Heading size="lg">Média</Heading>
      <Text mt={3} mb={6} opacity={0.7}>
        Čas od času někomu připadne můj příběh zajímavý, a tak vznikly podcasty
        a články.
      </Text>
      {MediaPosts.map((post) => (
        <MediaPost
          key={post.externalLink}
          externalLink={post.externalLink}
          avatar={post.avatar}
          heading={post.heading}
          description={post.description}
        />
      ))}
    </Box>
  );
};

export default Media;
