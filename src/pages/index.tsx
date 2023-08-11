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

interface HomeProps {
  latestPost: Post;
  projects: Project[];
}

const Home: NextPage<{ latestPost: Post; projects: Project[] }> = ({
  latestPost,
  projects,
}: HomeProps) => {
  return (
    <div className={styles.container}>
      <Intro />
      <BlogPitch post={latestPost} />
      <ProjectsPitch projects={projects} />
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

  const projects = allProjects.slice(2, 5);

  return {
    props: {
      latestPost,
      projects,
    },
  };
};
