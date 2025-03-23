import {
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";
import { CourseCard } from "../../common/types";
import CourseThumbnail from "./CourseThumbnail";
import styles from "./CourseCard.module.scss";
import MdxTagList from "../MdxComponents/MdxTag";
interface Props {
  course: CourseCard;
}

const CourseCard: FC<Props> = ({ course }) => {
  return (
    <Card
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      variant="outline"
      my={2}
      className={styles.card}
    >
      <CourseThumbnail src={course.image} alt={course.alt} />
      <Stack w={{ base: "100%", md: "70%" }}>
        <CardBody>
          <Heading size="md">{course.heading}</Heading>
          <Flex
            align="baseline"
            mt={3}
            gap={{ base: 2, sm: 4 }}
            direction={{ base: "column", sm: "row" }}
          >
            {/* <Text>
              <Text as="span" mr={1}>
                🗓️
              </Text>
              {course.date}
            </Text> */}
            <Text>
              <Text as="span" mr={1}>
                🗓️
              </Text>
              {course.time}
            </Text>
            <Text>
              <Text as="span" mr={1}>
                💳
              </Text>
              {course.price}
            </Text>
          </Flex>
          <Text py="2" className={styles.description} opacity={0.7}>
            {course.description}
          </Text>
          <Flex
            align="baseline"
            mt={{ base: 0, md: 4 }}
            gap={{ base: 4, md: 4 }}
            direction={{ base: "column", md: "row" }}
            justify="space-between"
          >
            <MdxTagList size="md" tags={course.tags} color="purple" />
            <Button
              colorScheme={"purple"}
              size="md"
              width={{ base: "full", md: "auto" }}
            >
              👉 Detail kurzu
            </Button>
          </Flex>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CourseCard;
