import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import styles from "./BlogPitch.module.scss";

const BlogPitch = ({ post }) => {
  //   console.log("blog pitch", posts);
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Nejnovější blogpost</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        eveniet quos temporibus.
      </p>
      <h3>{post.frontMatter.title}</h3>
      <Link href="/blog">Read more &#x2192;</Link>
    </section>
  );
};

export default BlogPitch;
