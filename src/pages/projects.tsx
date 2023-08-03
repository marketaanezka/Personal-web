import { Grid } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
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
          <ProjectCard key={project.heading} project={project} />
        ))}
      </Grid>
    </>
  );
};

export default Projects;
