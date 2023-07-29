import { Link } from "@chakra-ui/react";
import { Github, Instagram, Linkedin } from "../../assets/Icons/icons";

const SocialMediaButtons = () => {
  return (
    <>
      <Link href="https://github.com/marketaanezka" target="_blank">
        <Github fontSize="2xl" mr={1} opacity={0.7} />
      </Link>
      <Link href="https://www.instagram.com/marketa_willis/" target="_blank">
        <Instagram fontSize="2xl" mr={1} opacity={0.7} />
      </Link>
      <Link href="https://www.linkedin.com/in/marketa-willis/" target="_blank">
        <Linkedin fontSize="2xl" opacity={0.7} />
      </Link>
    </>
  );
};

export default SocialMediaButtons;
