import { Link, Stack, Text } from "@chakra-ui/react";
import { Github, Instagram, Linkedin } from "../../../assets/Icons/icons";
import SocialMediaButtons from "../../SocialMediaButtons/socialMediaButtons";
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
        <Stack direction="row" spacing={1}>
          <SocialMediaButtons />
        </Stack>
      </div>
      <div className={styles.imageWrapper}>
        {/* <div className="profile-image"></div> */}
      </div>
    </section>
  );
};

export default Intro;
