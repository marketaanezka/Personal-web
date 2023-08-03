import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import styles from "./BlogPitch.module.scss";
import { Post } from "../../../common/types";
import BlogPostCard from "../../BlogPostCard/BlogPostCard";

interface BlogPitchProps {
  post: Post;
}

const BlogPitch: FC<BlogPitchProps> = ({ post }) => {
  return (
    <section className={styles.wrapper}>
      <Flex alignItems={"center"}>
        <h2 className={styles.heading}>Blog</h2>
        <Link href={`/blog`} className={styles.link}>
          Všechny články &#x2192;
        </Link>
      </Flex>
      Projdi si články na téma od soft skills, imposter syndromu k programování,
      nebo si rovnou přečti nejnovější příspěvek.
      <Link href={`/blog/${post.slug}`}>
        <BlogPostCard post={post} />
      </Link>
    </section>
  );
};

export default BlogPitch;
