import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
  HStack,
  Tag,
} from "@chakra-ui/react";

const ProjectCard = () => {
  return (
    <Card maxW="sm" className="u-card-shadow">
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
        borderRadius="0.375rem 0.375rem 0 0"
      />
      <CardBody>
        <Stack mt="2" spacing="3">
          <Heading size="md" w={"fit-content"}>
            Crypto Converter
          </Heading>
          <Text>
            Osobní projekt Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Omnis ab magni sequi ea praesentium fugiat molestias deleniti
            accusamus beatae ex ipsam consequuntur laborum, fugit vero maxime
          </Text>
          <Text color="lila.500">
            <HStack>
              <Tag bg={"lila.500"}>HTML</Tag>
              <Tag bg={"lila.500"}>CSS</Tag>
              <Tag bg={"lila.500"}> Javascript</Tag>
            </HStack>
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
