import {
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import { FC } from "react";
import { Post } from "../../common/types";
import BlogThumbImage from "./BlogThumbImage";
import styles from "./BlogPostCard.module.scss";
import { unixToDate } from "../../utils/human-readable";
interface BlogPostCardProps {
  post: Post;
}

const BlogPostCard: FC<BlogPostCardProps> = ({ post }) => {
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
          <Flex align="baseline" mt="1" gap={3}>
            <Text>
              <Avatar src="/img/avatar.jpeg" size="xs" />
            </Text>
            <Text fontSize="sm" opacity={0.7}>
              {unixToDate(post.frontMatter.date)}
            </Text>
            <Text fontSize="sm" opacity={0.7}>
              {post.frontMatter.readingtime}
            </Text>
          </Flex>
          <Text py="2" className={styles.description}>
            {post.frontMatter.description}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default BlogPostCard;
