/* eslint-disable react/prop-types */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import styles from "../../styles/Blog.module.scss";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import Image from "next/image";

const Post = ({ frontMatter, mdxSource }) => {
  console.log("postpage", mdxSource);

  const ResponsiveImage = (props) => (
    <Image
      alt={props.alt}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...props}
    />
  );

  const components = {
    SyntaxHighlighter,
    img: ResponsiveImage,
  };

  return (
    <div className={styles.blog}>
      <Link href="/blog" className={styles.retrunlink}>
        {" "}
        ← Zpět na blog
      </Link>
      <h1 className={styles.blogHeading}>{frontMatter.title}</h1>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.split(".")[0],
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("src", "posts", slug + ".mdx")
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
