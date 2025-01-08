import { Box } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

const CourseThumbnail = ({ src, alt }: Props) => {
  return (
    <Box
      w={{ base: "auto", md: "30%" }}
      h={{ base: "10rem", md: "auto" }}
      position="relative"
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        quality={60}
      />
    </Box>
  );
};

export default CourseThumbnail;
