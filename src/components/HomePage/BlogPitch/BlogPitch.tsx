import Link from "next/link";
import { FC } from "react";
import styles from "./BlogPitch.module.scss";
import { Post } from "../../../common/types";
import BlogPostCard from "../../BlogPostCard/BlogPostCard";
import PitchHeading from "../../PitchHeading/PitchHeading";

interface BlogPitchProps {
  post: Post;
}

const BlogPitch: FC<BlogPitchProps> = ({ post }) => {
  return (
    <section className={styles.wrapper}>
      <PitchHeading heading="Blog" linkUrl="/blog" linkText="Další články" />
      <Link href={`/blog/${post.slug}`}>
        <BlogPostCard post={post} />
      </Link>
    </section>
  );
};

export default BlogPitch;
