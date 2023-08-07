import fs from "fs";

import { Box, Grid, Heading, Text } from "@chakra-ui/react";
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
    <Box>
      <Heading size="lg">Projekty</Heading>
      <Text mt={3} mb={6} opacity={0.7}>
        Seznam projektů, na kterých jsem pracovala, jaké technologie jsem
        používala, i co jsem se na nich naučila.
      </Text>
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
    </Box>
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
