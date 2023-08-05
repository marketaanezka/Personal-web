/* eslint-disable */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import styles from "../../styles/Mdx.module.scss";
import Link from "next/link";
import { Code, Heading } from "@chakra-ui/react";
import ResponsiveImage from "../../components/MdxComponents/ResponsiveImage";
import CodeBlock from "../../components/MdxComponents/CodeBlock";

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
    Code,
  };

  return (
    <div className={styles.mdx}>
      <Link href="/blog" className={styles.retrunlink}>
        {" "}
        ← Zpět na blog
      </Link>
      <Heading size="xl">{frontMatter.title}</Heading>
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
