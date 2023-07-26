import { Text, Card, Image, Stack, CardBody, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { Post } from "../../common/types";
import BlogThumbImage from "./BlogThumbImage";
import styles from "./BlogPostCard.module.scss";

interface BlogPostCardProps {
  post: Post;
}

const BlogPostCard: FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      my={2}
      className={styles.card}
    >
      <BlogThumbImage src={post.frontMatter.thumbnailUrl} alt="alt" />
      <Stack>
        <CardBody>
          <Heading size="md">{post.frontMatter.title}</Heading>

          <Text py="2">{post.frontMatter.description}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default BlogPostCard;
