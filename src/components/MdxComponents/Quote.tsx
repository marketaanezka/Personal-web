import { Card, CardBody, Text } from "@chakra-ui/react";
import { FC } from "react";

type QuoteProps = {
  children: React.ReactNode;
  author?: string;
};

const Quote: FC<QuoteProps> = ({ author, children }) => (
  <Card mt={{ base: 10, md: 16, lg: 12 }}>
    <CardBody textAlign="center" px={{ md: 10, lg: 14 }}>
      <Text fontStyle="oblique" fontSize="md">
        {children}
      </Text>
      {author && (
        <Text mt={2} fontSize="sm">
          - {author}
        </Text>
      )}
    </CardBody>
  </Card>
);

export default Quote;
