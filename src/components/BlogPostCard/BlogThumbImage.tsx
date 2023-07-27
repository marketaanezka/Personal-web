import { Box } from "@chakra-ui/react";
import Image from "next/image";

type BlogThumbImageProps = {
  src: string;
  alt: string;
};

const BlogThumbImage = ({ src, alt }: BlogThumbImageProps) => {
  return (
    <Box
      w={{ base: "auto", sm: "10rem" }}
      h={{ base: "10rem", sm: "auto" }}
      position="relative"
    >
      <Box>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          quality={10}
        />
        ;
      </Box>
    </Box>
  );
};

export default BlogThumbImage;
