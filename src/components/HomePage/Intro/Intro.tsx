import { Box, Stack, Text, Button, Link } from "@chakra-ui/react";
import SocialMediaButtons from "../../SocialMediaButtons/SocialMediaButtons";
import Image from "next/image";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Markéta Willis, mentor programování a kariérní poradce pro IT
        </h1>
        <Stack direction="row" spacing={1} my={3}>
          <SocialMediaButtons />
        </Stack>

        <Text as="span" className={styles.text} opacity={0.75} mr={1.5}>
          Věnuji se tématům frontendových technologií, přípravě na pohovor a
          rozvoj profesní značky. Zajímá vás, jestli je programování to pravé
          pro vás, nebo už v IT jste a chcete se kariérně posunout? Nabízím
        </Text>
        <Link href="/mentoring" className="linkUnderline">
          individální mentoring.
        </Link>
        <Text className={styles.text} opacity={0.75} marginTop={[4, 4, 6]}>
          Také pracuji na novém kurzu o efektivním hledání práce v IT.
        </Text>
        <Link href="/courses" className="linkUnderline">
          Detaily kurzu Jak hledat práci v IT sebevědomě a autenticky.
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
