import { Text, Card, Image, Stack, CardBody, Heading } from "@chakra-ui/react";
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
      <h2 className={styles.heading}>Nejnovější blogpost</h2>

      <Link href={`/blog/${post.slug}`}>
        <BlogPostCard post={post} />
      </Link>
      <Link href={`/blog`} className={styles.link}>
        All blogposts &#x2192;
      </Link>
    </section>
  );
};

export default BlogPitch;
