import {
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  Avatar,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { Post } from "../../common/types";
import Image from "next/image";
import styles from "./MediaCard.module.scss";
import wdf from "../../../public/img/wdf.png";

interface MediaCardProps {
  post: Post;
}

const MediaCard: FC<MediaCardProps> = ({ post }) => {
  const color = useColorModeValue("#626262", "#bfbfbf");
  return (
    <Card
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      variant="outline"
      my={2}
      className={styles.card}
    >
      <Image src={wdf} alt="wdf logo" width={100} height={100} />
      <Stack w={{ base: "100%", md: "70%" }}>
        <CardBody>
          <Heading size="sm">Se zapojením do komunit bych neváhala</Heading>
          <Flex align="center" mt="0.5">
            <Text>
              <Avatar src="/img/avatar.jpeg" marginRight="0.5rem" size="xs" />
            </Text>
            <Text fontSize="xs" color={color}>
              {post.frontMatter.date}
            </Text>
          </Flex>
          <Text py="2">{post.frontMatter.description}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default MediaCard;
