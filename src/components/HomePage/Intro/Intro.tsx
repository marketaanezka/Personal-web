import { Box, Stack, Text } from "@chakra-ui/react";
import SocialMediaButtons from "../../SocialMediaButtons/SocialMediaButtons";
import Image from "next/image";
import Link from "next/link";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Markéta Willis, frontend vývojářka, mentor a lektor
        </h1>
        <Stack direction="row" spacing={1} my={3}>
          <SocialMediaButtons />
        </Stack>
        <Text className={styles.text} opacity={0.7} mb={3}>
          Baví mě technologie webového vývoje, ráda se učím a stejně rada učím
          druhé. Nevěřím, že programovat může jen ten, kdo na to má “mozek” od
          narození.
        </Text>
        <Text className={styles.text} opacity={0.7}>
          Kromě webového vývoje se zabývám tématem přípravy na změnu kariéry do
          IT, a to nejen prakticky, ale i mentálně. Na vlastní cestě mě
          překvapilo, jak byl přechod kromě samotného studia programování
          náročný i emocionálně. Věnuji se problematice imposter syndromu, práci
          se zpětnou vazbou, vyhoření, pozici ženy v převážně mužských týmech i
          dalším.
        </Text>
        <Link href="/about" className={styles.link}>
          Více o mně &#x2192;
        </Link>
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
            src={
              "https://raw.githubusercontent.com/marketaanezka/Personal-web/images/profile.jpeg"
            }
            alt={"profile image"}
            fill
            style={{ objectFit: "cover" }}
            priority={true}
          />
        </Box>
      </Box>
      {/* </div> */}
    </section>
  );
};

export default Intro;
