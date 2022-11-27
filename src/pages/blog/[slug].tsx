import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const Post = ({ frontMatter, mdxSource }) => {
  console.log("postpage", mdxSource);

  return (
    <div>
      <h2>{frontMatter.title}</h2>
      <MDXRemote {...mdxSource} />
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
