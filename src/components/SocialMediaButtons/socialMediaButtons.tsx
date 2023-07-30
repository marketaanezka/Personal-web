import { Link } from "@chakra-ui/react";
import { Github, Instagram, Linkedin } from "../../assets/Icons/icons";
import styles from "./SocialMediaButtons.module.scss";

const SocialMediaButtons = () => {
  return (
    <div className={styles.socialMediaIcon}>
      <Link href="https://www.instagram.com/marketa_willis/" target="_blank">
        <Instagram fontSize="2xl" mr={1} opacity={0.9} />
      </Link>
      <Link href="https://github.com/marketaanezka" target="_blank">
        <Github fontSize="2xl" mr={1} opacity={0.9} />
      </Link>

      <Link href="https://www.linkedin.com/in/marketa-willis/" target="_blank">
        <Linkedin fontSize="2xl" opacity={0.9} />
      </Link>
    </div>
  );
};

export default SocialMediaButtons;
