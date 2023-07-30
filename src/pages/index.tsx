import type { NextPage } from "next";
import fs from "fs";
import Intro from "../components/HomePage/Intro/Intro";
import styles from "../styles/Home.module.scss";
import AboutMePitch from "../components/HomePage/AboutMePitch/AboutMePitch";
import FeaturedPitch from "../components/HomePage/FeaturedPitch/FeaturedPitch";
import path from "path";
import matter from "gray-matter";
import BlogPitch from "../components/HomePage/BlogPitch/BlogPitch";

const Home: NextPage = ({ latestPost }) => {
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
