/* eslint-disable */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import styles from "../../styles/Mdx.module.scss";
import Link from "next/link";
import { Code, Flex, Heading, Tag, Text } from "@chakra-ui/react";
import ResponsiveImage from "../../components/MdxComponents/ResponsiveImage";
import CodeBlock from "../../components/MdxComponents/CodeBlock";
import MdxLink from "../../components/MdxComponents/MdxLink";
import MdxTag from "../../components/MdxComponents/MdxTag";

type ProjectProps = {
  frontMatter: {
    title: string;
    year: number;
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
    MdxLink,
    MdxTag,
  };

  return (
    <div className={styles.mdx}>
      <Link href="/projects" className={styles.retrunlink}>
        {" "}
        ← Zpět na projekty
      </Link>
      <Flex
        alignItems="baseline"
        gap={4}
        mb={4}
        pr={{ base: 8, md: 10 }}
        justifyContent="space-between"
      >
        <Heading size="xl">{frontMatter.title}</Heading>
        <Tag size="md" colorScheme="gray">
          {frontMatter.year}
        </Tag>
      </Flex>
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
