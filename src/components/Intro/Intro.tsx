import { Link, Text } from "@chakra-ui/react";
import { Github, Instagram, Linkedin } from "../../assets/Icons/icons";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Markéta Willis, frontend vývojářka, mentor a lektor
        </h1>
        <Text className={styles.text} opacity={0.7} mb={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          eveniet quos temporibus ullam repudiandae libero sint velit excepturi
          voluptates impedit!
        </Text>
        <Link href="https://github.com/marketaanezka" target="_blank">
          <Github fontSize="2xl" mr={1} opacity={0.7} />
        </Link>
        <Link href="https://www.instagram.com/marketa_willis/" target="_blank">
          <Instagram fontSize="2xl" mr={1} opacity={0.7} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/marketa-willis/"
          target="_blank"
        >
          <Linkedin fontSize="2xl" opacity={0.7} />
        </Link>
      </div>
      <div className={styles.imageWrapper}>
        {/* <div className="profile-image"></div> */}
      </div>
    </section>
  );
};

export default Intro;
