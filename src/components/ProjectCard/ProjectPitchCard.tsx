import {
  Text,
  Box,
  Flex,
  Grid,
  Heading,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { Project } from "../../common/types";

interface ProjectCardProps {
  small?: boolean;
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { frontMatter, slug } = project;
  const borderColor = useColorModeValue("#eaeaeae6", "transparent");

  return (
    <Box
      _notFirst={{ paddingTop: "1.5rem" }}
      borderBottom={{ base: "1px solid #8e8e8e4d", lg: "none" }}
      paddingBottom={{ base: 6, lg: 0 }}
    >
      <Grid templateColumns={{ base: "3fr 1fr", lg: "2fr 4fr 1fr" }}>
        <Link href={`/projects/${slug}`} key={slug}>
          <Flex align="baseline">
            <Heading size="sm" mr={2}>
              <span className="linkUnderline">{frontMatter.title}</span>
            </Heading>
            {frontMatter.company && (
              <Text fontSize="sm">@{frontMatter.company}</Text>
            )}
          </Flex>
        </Link>
        <Flex
          wrap={"wrap"}
          gap={2}
          order={{ base: 3, lg: 0 }}
          mt={{ base: 4, lg: 0 }}
          gridArea={{ base: "2 / 1 / span 1 / span 2", lg: "auto" }}
        >
          {frontMatter.technologies.map((technology) => (
            <Tag
              colorScheme="gray"
              bg={useColorModeValue("white", "#F7F7F729")}
              border={`1px solid ${borderColor}`}
              key={technology}
            >
              {technology}
            </Tag>
          ))}
        </Flex>
        <Box fontSize="sm" ml={4}>
          {frontMatter.year}
        </Box>
      </Grid>
    </Box>
  );
};

export default ProjectCard;
