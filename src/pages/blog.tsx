import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { FC } from "react";
import { Post } from "../common/types";
import BlogPostCard from "../components/BlogPostCard/BlogPostCard";

interface BlogPostProps {
  posts: Post[];
}

const Blog: FC<BlogPostProps> = ({ posts }) => {
  return (
    <Box>
      <Heading size="lg">Blog</Heading>
      <Text mt={3} mb={6} opacity={0.7}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        molestiae.
      </Text>
      <VStack spacing={4} align="stretch">
        {posts.map((post, index) => {
          console.log("individual post", post);
          return (
            <Link href={`/blog/${post.slug}`} key={`${post.slug}-${index}`}>
              <BlogPostCard post={post} />
            </Link>
          );
        })}
      </VStack>
    </Box>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "posts", filename)
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

// https://www.youtube.com/watch?v=WCGopHwXnic