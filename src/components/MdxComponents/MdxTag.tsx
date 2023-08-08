import { Tag, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

type TagProps = {
  colorScheme: string;
  id: string;
  children: React.ReactNode;
};

const MdxTag: FC<TagProps> = ({ colorScheme, children, id }) => (
  <Tag
    mt={2}
    size={"lg"}
    // bg={useColorModeValue("lila.300", "lila.800")}
    // color={useColorModeValue("whiteAlpha.900", "whiteAlpha.800")}
    colorScheme={colorScheme}
    key={id}
  >
    {children}
  </Tag>
);

export default MdxTag;
