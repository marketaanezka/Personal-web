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
import BlogThumbImage from "./BlogThumbImage";
import styles from "./BlogPostCard.module.scss";
interface BlogPostCardProps {
  post: Post;
}

const BlogPostCard: FC<BlogPostCardProps> = ({ post }) => {
  const color = useColorModeValue("#626262", "#bfbfbf");
  return (
    <Card
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      variant="outline"
      my={2}
      className={styles.card}
    >
      <BlogThumbImage src={post.frontMatter.thumbnailUrl} alt="alt" />
      <Stack w={{ base: "100%", md: "70%" }}>
        <CardBody>
          <Heading size="md">{post.frontMatter.title}</Heading>
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

export default BlogPostCard;