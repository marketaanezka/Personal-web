import fs from "fs";

import { Grid } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import path from "path";
import matter from "gray-matter";
import { Project } from "../common/types";
import { FC } from "react";

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <h1>Hello this is Projects page</h1>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={5}
      >
        {projects.map((project) => (
          <ProjectCard key={project.frontMatter.title} project={project} />
        ))}
      </Grid>
    </>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src", "projects"));

  const projects = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "projects", filename)
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      projects,
    },
  };
};
