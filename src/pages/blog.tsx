import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";

const Blog = ({ posts }) => {
  console.log("BLOG", posts);
  return (
    <>
      <h1>Hello this is Blog page</h1>
      {posts.map((post, index) => {
        console.log("individual post", post.slug);
        return (
          <Link href={`/blog/${post.slug}`} key={`${post.slug}-${index}`}>
            <h2>{post.frontMatter.title}</h2>
          </Link>
        );
      })}
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "posts", filename)
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

// https://www.youtube.com/watch?v=WCGopHwXnic
