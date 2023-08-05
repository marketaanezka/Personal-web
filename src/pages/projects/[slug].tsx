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

type ProjectProps = {
  frontMatter: {
    title: string;
  };
  mdxSource: {
    compiledSource: string;
    renderedOutput: string;
    scope: Record<string, unknown>;
  };
};

const Project = ({ frontMatter, mdxSource }: ProjectProps) => {
  const components = {
    img: ResponsiveImage,
    CodeBlock,
    Code,
  };

  return (
    <div className={styles.mdx}>
      <Link href="/projects" className={styles.retrunlink}>
        {" "}
        ← Zpět na projekty
      </Link>
      <Heading size="2xl">{frontMatter.title}</Heading>
      {/* @ts-ignore */}
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
};

export default Project;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src", "projects"));

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
    path.join("src", "projects", slug + ".mdx")
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
