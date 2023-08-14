import styles from "./ProjectsPitch.module.scss";
import { Box, Grid } from "@chakra-ui/react";
import ProjectCard from "../../ProjectCard/ProjectCard";
import PitchHeading from "../../PitchHeading/PitchHeading";
import { Project } from "../../../common/types";
import { FC } from "react";
import ProjectPitchCard from "../../ProjectCard/ProjectPitchCard";

interface ProjectsPitchProps {
  projects: Project[];
}

const ProjectsPitch: FC<ProjectsPitchProps> = ({ projects }) => {
  return (
    <section className={styles.wrapper}>
      <PitchHeading
        heading="Projekty"
        linkUrl="/projects"
        linkText="Všechny projekty"
      />
      {/* <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={5}
        mt={4}
      >
        {projects.map((project) => (
          <ProjectCard small project={project} key={project.slug} />
        ))}
      </Grid> */}
      <Box>
        {projects.map((project) => (
          <ProjectPitchCard project={project} key={project.slug} />
        ))}
      </Box>
    </section>
  );
};

export default ProjectsPitch;
