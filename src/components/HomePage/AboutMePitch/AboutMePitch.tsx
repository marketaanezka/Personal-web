import { Box, Button, Text } from "@chakra-ui/react";
import styles from "./AboutMePitch.module.scss";

const Intro = () => {
  return (
    <section className={styles.wrapper}>
      <Box>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Od juniora ochromeného imposter syndromem k sebevědomému
            programátorovi
          </h1>
          <Text className={styles.text} opacity={0.75} mb={3}>
            Programovat jsem začala v roce 2019. Na mé cestě mě překvapilo, jak
            byl přechod kromě samotného studia náročný i psychicky. Proto jsem
            se začala věnovat tématu mentální odolnosti při změně kariéry,
            imposter syndromu a prevence vyhoření. Zaměřila jsem se na to, jak
            se v IT profesně posouvat bez strachu z toho, že nikdy nebudu dost
            dobrá.
          </Text>
          <Text className={styles.text} opacity={0.75} mb={3}>
            Po letech, kdy jsem hledala pochvalu od autority a bála jsem se
            kritiky, jsem se naučila přepnout svůj mindset tak, že jsem si
            vědoma svých schopností a aktivně si vyžaduji feedback.
          </Text>
          <Text className={styles.text} opacity={0.75}>
            Teď tyto zkušenosti předávám dál, s cílem pomoci ostatním nejen
            programování a najít v IT světě sebevědomí a naplnění.
          </Text>

          <Button
            colorScheme={"purple"}
            marginTop={[4, 4, 8]}
            as="a"
            href="/about"
          >
            O mně a jak pracuji
          </Button>
        </div>
      </Box>
      {/* <div className={styles.imageWrapper}> */}
      {/* <Box
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
      </Box> */}
      {/* </div> */}
    </section>
  );
};

export default Intro;
