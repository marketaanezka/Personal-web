import { Box, Stack, Text, Button } from "@chakra-ui/react";
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

        <Text className={styles.text} opacity={0.75}>
          Nabízím praktický mentoring frontendových technologií, přípravu na
          pohovor a rozvoj profesní značky.
        </Text>
        <Text className={styles.text} opacity={0.75} mb={3}>
          Konzultace připravuji na míru pro vaše potřeby a schopnosti. Vaše
          cesta je unikátní, pojďme ji společně objevit.
        </Text>
        <Text className={styles.text} opacity={0.75}>
          Zajímá vás, jestli je programování to pravé pro vás, nebo už v IT jste
          a chcete se kariérně posunout?
        </Text>
        <Button
          colorScheme={"purple"}
          marginTop={[4, 4, 6]}
          as="a"
          href="/mentoring"
        >
          Více o mentoringu
        </Button>
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
