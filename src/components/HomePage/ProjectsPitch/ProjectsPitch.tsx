import Link from "next/link";
import styles from "./ProjectsPitch.module.scss";
import { projects } from "../../../data/projects";
import { Grid, Text } from "@chakra-ui/react";
import ProjectCard from "../../ProjectCard/ProjectCard";

const ProjectsPitch = () => {
  return (
    <section className={styles.wrapper}>
      <Link href="/projects">
        <h2 className={`${styles.heading} linkUnderline`}>Projekty</h2>
      </Link>
      <Text mb={4}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        eveniet quos temporibus ullam repudiandae libero sint velit excepturi
        voluptates impedit!
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={5}
      >
        <ProjectCard small project={projects[1]} />
        <ProjectCard small project={projects[0]} />
        <ProjectCard small project={projects[2]} />
      </Grid>
    </section>
  );
};

export default ProjectsPitch;
