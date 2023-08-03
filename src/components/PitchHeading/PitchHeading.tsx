import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./PitchHeading.module.scss";

interface PitchHeadingProps {
  heading: string;
  linkUrl: string;
  linkText: string;
}

const PitchHeading = ({ heading, linkUrl, linkText }: PitchHeadingProps) => {
  return (
    <Flex alignItems={"center"}>
      <Heading mr={2} className={styles.heading}>
        {heading}
      </Heading>
      <Link href={linkUrl} className="u-arrowlink">
        {linkText} &#x2192;
      </Link>
    </Flex>
  );
};

export default PitchHeading;
