import { Flex, Tag } from "@chakra-ui/react";
import { FC } from "react";

interface TagList {
  tags: string[];
  color: string;
}

const MdxTagList: FC<TagList> = ({ tags, color }) => {
  return (
    <Flex wrap="wrap" gap={2} mt={4}>
      {tags.map((tag) => (
        <Tag size={"lg"} colorScheme={color} key={tag}>
          {tag}
        </Tag>
      ))}
    </Flex>
  );
};

export default MdxTagList;
