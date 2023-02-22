import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import styles from "./BlogPitch.module.scss";

const BlogPitch = ({ post }) => {
  console.log("blog pitch", post);
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Nejnovější blogpost</h2>
      <h3>{post.frontMatter.title}</h3>
      <p>{post.frontMatter.description}</p>
      <Link href={`/blog/${post.slug}`}>Read more &#x2192;</Link>
    </section>
  );
};

export default BlogPitch;
