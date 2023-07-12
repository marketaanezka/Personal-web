import { Text, Card, Image, Stack, CardBody, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { Post } from "../../common/types";

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
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

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
