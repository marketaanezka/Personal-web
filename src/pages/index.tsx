import type { NextPage } from "next";
import fs from "fs";
import Intro from "../components/Intro/Intro";
import styles from "../styles/Home.module.scss";
import AboutMePitch from "../components/AboutMePitch/AboutMePitch";
import FeaturedPitch from "../components/FeaturedPitch/FeaturedPitch";
import Link from "next/link";
import path from "path";
import matter from "gray-matter";
import BlogPitch from "../components/BlogPitch/BlogPitch";

const Home: NextPage = ({ latestPost }) => {
  console.log("home", latestPost);
  return (
    <div className={styles.container}>
      <Intro />
      <AboutMePitch />
      <BlogPitch post={latestPost} />

      <FeaturedPitch />
    </div>
  );
};

export default Home;

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

  const latestPost = posts[0];

  return {
    props: {
      latestPost,
    },
  };
};
