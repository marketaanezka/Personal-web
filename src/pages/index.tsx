import type { NextPage } from "next";
import fs from "fs";
import Intro from "../components/HomePage/Intro/Intro";
import styles from "../styles/Home.module.scss";
import ProjectsPitch from "../components/HomePage/ProjectsPitch/ProjectsPitch";
import FeaturedPitch from "../components/HomePage/FeaturedPitch/FeaturedPitch";
import path from "path";
import matter from "gray-matter";
import BlogPitch from "../components/HomePage/BlogPitch/BlogPitch";
import { Post, Project } from "../common/types";
import AboutMePitch from "../components/HomePage/AboutMePitch/AboutMePitch";

interface HomeProps {
  latestPosts: Post[];
  projects: Project[];
}

const Home: NextPage<{ latestPosts: Post[]; projects: Project[] }> = ({
  latestPosts,
  projects,
}: HomeProps) => {
  return (
    <div className={styles.container}>
      <Intro />
      <AboutMePitch />
      <BlogPitch posts={latestPosts} />
      {/* <ProjectsPitch projects={projects} /> */}
      <FeaturedPitch />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));

  const postsByName = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "posts", filename)
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  const posts = postsByName.sort((a, b) => {
    return b.frontMatter.date - a.frontMatter.date;
  });

  const latestPosts = posts.slice(0, 3);

  const projectFiles = fs.readdirSync(path.join("src", "projects"));

  const allProjects = projectFiles.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "projects", filename)
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  const projects = allProjects.slice(0, 4);

  return {
    props: {
      latestPosts,
      projects,
    },
  };
};
