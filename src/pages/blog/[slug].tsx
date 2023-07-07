/* eslint-disable */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import styles from "../../styles/Blog.module.scss";
import Link from "next/link";
import Image from "next/image";
import Prism from "prismjs";
import { useEffect } from "react";

type ResponsiveImageProps = {
  alt: string;
  src: string;
};

const ResponsiveImage = (props: ResponsiveImageProps) => (
  <Image sizes="100vw" style={{ width: "100%", height: "auto" }} {...props} />
);

type CodeBlockProps = {
  children: string;
  language: string;
};

const CodeBlock = ({ children, language }: CodeBlockProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre className={styles.codeWrapper}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
};

const codeSample = `const add = (a, b) => {
  return a + b;
}`;

type PostProps = {
  frontMatter: {
    title: string;
  };
  mdxSource: {
    compiledSource: string;
    renderedOutput: string;
    scope: Record<string, unknown>;
  };
};

const Post = ({ frontMatter, mdxSource }: PostProps) => {
  const components = {
    img: ResponsiveImage,
    CodeBlock,
  };

  return (
    <div className={styles.blog}>
      <Link href="/blog" className={styles.retrunlink}>
        {" "}
        ← Zpět na blog
      </Link>
      <h1 className={styles.blogHeading}>{frontMatter.title}</h1>
      {/* @ts-ignore */}
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

type BlogProps = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params: { slug } }: BlogProps) => {
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
