import Image from "next/image";

type ResponsiveImageProps = {
  alt: string;
  src: string;
};

const ResponsiveImage = (props: ResponsiveImageProps) => (
  <Image sizes="100vw" style={{ width: "100%", height: "auto" }} {...props} />
);

export default ResponsiveImage;
