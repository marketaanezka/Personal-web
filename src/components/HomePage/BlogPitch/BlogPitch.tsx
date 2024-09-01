import Link from "next/link";
import { FC } from "react";
import styles from "./BlogPitch.module.scss";
import { Post } from "../../../common/types";
import BlogPostCard from "../../BlogPostCard/BlogPostCard";
import { Box, Button } from "@chakra-ui/react";

interface BlogPitchProps {
  posts: Post[];
}

const BlogPitch: FC<BlogPitchProps> = ({ posts }) => {
  return (
    <section className={styles.wrapper}>
      <Link href="/blog">
        <h2 className={styles.heading}>Blog</h2>
      </Link>
      <Box opacity={0.75} mb={4}>
        Píšu články z oblasti frontendového vývoje a programátorského profesního
        růstu.
      </Box>
      {posts.map((post) => (
        <Box mt={4} key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <BlogPostCard post={post} />
          </Link>
        </Box>
      ))}
      <Button colorScheme={"purple"} marginTop={4} as="a" href="/blog">
        Všechny články
      </Button>
    </section>
  );
};

export default BlogPitch;
