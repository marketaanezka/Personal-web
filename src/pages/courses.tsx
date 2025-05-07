import { Box, Heading, VStack, Text } from "@chakra-ui/react";

import Link from "next/link";

import CourseCard from "../components/CourseCard/CourseCard";
import CourseInterestCard from "../components/CourseCard/CourseInterestCard";
import { courseList } from "../data/courseList";

const CoursesPage = () => {
  return (
    <Box>
      <Heading size="lg">Kurzy</Heading>
      <Text mt={3} mb={6} opacity={0.75}>
        Nabízím kurzy se zaměřením na hledání práce v IT, přípravu CV,
        coverletteru, portfolia, zvládání technických pohovorů i vyjednávání o
        mzdě. Pokud máte zájem o individální spolupráci, neváhejte mě
        kontaktovat na Instagramu nebo LinkedInu.
      </Text>
      <VStack spacing={4} align="stretch">
        <CourseInterestCard />

        {/* {courseList.map((course, index) => {
          return (
            <Link href={course.link} key={`${course.link}-${index}`}>
              <CourseCard course={course} />
            </Link>
          );
        })} */}
      </VStack>
    </Box>
  );
};

export default CoursesPage;

// https://www.youtube.com/watch?v=WCGopHwXnic
