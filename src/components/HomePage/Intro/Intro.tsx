import { Box, Link, Stack, Text } from "@chakra-ui/react";
import SocialMediaButtons from "../../SocialMediaButtons/SocialMediaButtons";
import Image from "next/image";
import profileImage from "../../../assets/images/profile.jpeg";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Markéta Willis, frontend vývojářka, mentor a lektor
        </h1>
        <Text className={styles.text} opacity={0.7} mb={3}>
          Baví mě technologie webového vývoje, ráda se učím a stejně rada učím
          druhé. Nevěřím, že programovat muže jen ten, kdo na to má “mozek” od
          narození.
        </Text>
        <Text className={styles.text} opacity={0.7} mb={3}>
          Kromě webového vývoje se zabývám tématem mentální odolnosti při změně
          kariéry do IT. Na vlastní cestě mě překvapilo, jak byl přechod kromě
          samotného studia programování náročný i emocionálně. Věnuji se tématu
          imposter syndromu, práci se zpětnou vazbou, vyhoření, pozici ženy v
          převážně mužských týmech i dalším.
        </Text>
        <Stack direction="row" spacing={1}>
          <SocialMediaButtons />
        </Stack>
      </div>
      {/* <div className={styles.imageWrapper}> */}
      <Box
        mt={{ base: 7, md: 0 }}
        w={{ base: "90%", md: "20rem" }}
        h={{ base: "25rem", md: "30rem", lg: "22rem" }}
        maxW={"80vw"}
        position="relative"
      >
        <Box className={styles.imageWrapper}>
          <Image
            src={profileImage}
            alt={"profile image"}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
      {/* </div> */}
    </section>
  );
};

export default Intro;
