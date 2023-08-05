import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Tag,
  Flex,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { Project } from "../../common/types";

interface ProjectCardProps {
  small?: boolean;
  project: Project;
}

type CardImageProps = {
  src: string;
  alt: string;
};

const CardImage = ({ src, alt }: CardImageProps) => {
  return (
    <Box w={{ base: "auto" }} h={{ base: "12rem" }} position="relative">
      <Box>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover", borderRadius: "0.375rem 0.375rem 0 0" }}
          quality={10}
        />
        ;
      </Box>
    </Box>
  );
};

const ProjectCard: FC<ProjectCardProps> = ({ small, project }) => {
  const { frontMatter, slug } = project;
  return (
    <Card
      maxW={small === true ? "18rem" : "28rem"}
      className="u-card-shadow"
      top={0}
      _hover={{
        position: "relative",
        top: "-5px",
        transition: "top 0.25s",
      }}
      variant="outline"
    >
      <Link href={`/projects/${slug}`} key={slug}>
        <CardImage src={frontMatter.image} alt={frontMatter.imageAlt} />
        <CardBody
          display={"flex"}
          flexDir={"column"}
          justifyContent={"space-between"}
        >
          <Stack mt="2" spacing="3">
            <Heading size="md" w={"fit-content"}>
              {frontMatter.title}
            </Heading>
            {!small && <Text>{frontMatter.description}</Text>}
          </Stack>
          <Box mt={4}>
            <Flex wrap={"wrap"} gap={2}>
              {frontMatter.technologies.map((technology) => (
                <Tag
                  bg={useColorModeValue("lila.300", "lila.800")}
                  color={useColorModeValue("whiteAlpha.900", "whiteAlpha.800")}
                  key={technology}
                >
                  {technology}
                </Tag>
              ))}
            </Flex>
          </Box>
        </CardBody>
      </Link>
    </Card>
  );
};

export default ProjectCard;
