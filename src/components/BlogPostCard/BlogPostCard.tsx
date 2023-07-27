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
import avatar from "../../../public/img/about-me.webp";
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
      <Stack w={{ base: "100%", sm: "70%" }}>
        <CardBody>
          <Heading size="md">{post.frontMatter.title}</Heading>
          <Flex align="center" mt="0.5">
            <Text>
              <Avatar
                src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                marginRight="0.5rem"
                size="xs"
              />
            </Text>
            <Text fontSize="xs">{post.frontMatter.date}</Text>
          </Flex>
          <Text py="2">{post.frontMatter.description}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default BlogPostCard;
