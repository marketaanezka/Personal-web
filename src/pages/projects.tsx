import fs from "fs";

import { Box, Flex, Grid, Heading, Tag, Text } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import path from "path";
import matter from "gray-matter";
import { Project } from "../common/types";
import { FC } from "react";
import { skills } from "../data/skills";
import { SkillsCard } from "../common/types";

interface SkillsCardProps {
  skill: SkillsCard;
}

const SkillsCard: FC<SkillsCardProps> = ({ skill }) => {
  const color = skill.color;
  return (
    <Box>
      <Heading size="md" mb={4}>
        {skill.heading}
      </Heading>
      <Flex wrap="wrap" gap={2}>
        {skill.skillsList.map((skill) => (
          <Tag key={skill} size="lg" colorScheme={color}>
            {skill}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};

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
      <Box>
        <Heading size="lg" mt={8} mb={4}>
          Znalosti
        </Heading>
        <Text mt={3} mb={6} opacity={0.7}>
          Přehled technologií, se kterými pracuji a témata kterým se věnuji.
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            // md: "repeat(2, 1fr)",
            // lg: "repeat(3, 1fr)",
          }}
          gap={8}
        >
          {skills.map((skill) => (
            <SkillsCard skill={skill} key={skill.heading} />
          ))}
        </Grid>
      </Box>
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
