import Link from "next/link";
import styles from "./ProjectsPitch.module.scss";
import { projects } from "../../../data/projects";
import { Grid, Text } from "@chakra-ui/react";
import ProjectCard from "../../ProjectCard/ProjectCard";
import PitchHeading from "../../PitchHeading/PitchHeading";

const ProjectsPitch = () => {
  return (
    <section className={styles.wrapper}>
      <PitchHeading
        heading="Projekty"
        linkUrl="/projects"
        linkText="Všechny projekty"
      />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={5}
        mt={4}
      >
        <ProjectCard small project={projects[1]} />
        <ProjectCard small project={projects[0]} />
        <ProjectCard small project={projects[2]} />
      </Grid>
    </section>
  );
};

export default ProjectsPitch;
