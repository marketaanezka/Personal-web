import styles from "../styles/About.module.scss";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Heart, Instagram } from "../assets/Icons/icons";
import { FC } from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { skills } from "../data/skills";
import { SkillsCard } from "../common/types";

interface InstagramImageProps {
  imageLink: string;
  imageSource: string;
  imageAlt: string;
}

interface SkillsCardProps {
  skill: SkillsCard;
}

const SkillsCard: FC<SkillsCardProps> = ({ skill }) => {
  const color = skill.color;
  return (
    <Box>
      <Heading size="md" mb={4}>
        {skill.heading}
      </Heading>
      <Flex wrap="wrap" gap={2}>
        {skill.skillsList.map((skill) => (
          <Tag key={skill} size="md" colorScheme={color}>
            {skill}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};

const InstagramImage: FC<InstagramImageProps> = ({
  imageLink,
  imageSource,
  imageAlt,
}) => {
  return (
    <Box
      className={styles.paragraphImage}
      background={useColorModeValue("#c9c2ee", "#594d91")}
      borderRadius={"md"}
    >
      <Link href="https://www.instagram.com/marketa_willis/">
        <Flex
          p={1}
          alignItems={"center"}
          justifyContent="space-between"
          color={useColorModeValue("gray.900", "white")}
        >
          <Flex alignItems={"center"}>
            <Instagram fontSize="xl" mr={1} opacity={0.75} />
            <Text fontSize="0.8rem">marketa_willis</Text>
          </Flex>
          <Heart fontSize="md" mr={2} />
        </Flex>
      </Link>
      <Link href={imageLink} target="_blank">
        <Image
          src={imageSource}
          alt={imageAlt}
          width={800}
          height={800}
          className={styles.image}
        />
      </Link>
    </Box>
  );
};

const About = () => {
  return (
    <div>
      <section className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Těší mě! Jsem Markéta a&nbsp;tohle je můj příběh.
          </h2>
          <p className={styles.text}>
            Nejsem typický ajťák - nebyla jsem od dětství nadšenec do počítačů,
            ani jsem programování nestudovala ve škole. Naopak, vystudovala jsem
            jazyky a literaturu a věřila jsem stereotypům, že v IT jsou jen
            nerdi z matfyzu, co sedí ve sklepě a pijou redbully.
          </p>
          <Text mt={4}>
            Jaké bylo moje překvapení, když jsem poprvé začala psát kód a
            zjistila jsem, že je to zábava, a to dost návyková. Následně moje
            cesta vedla přes večerní kurzy a noční samostudium, až k pozici
            junior frontend developera.{" "}
          </Text>
        </div>
        <div className={styles.imageWrapper}>
          <CldImage
            width="600"
            height="600"
            src="rgtalk_jtakgk"
            alt="a girl programmer lecturer smiling"
            priority
          />
        </div>
      </section>
      <Box>
        <Box className={styles.paragraphLeft}>
          <Box>
            <Text>
              Při networkingu jsem ale stále často potkávala talentované nadšené
              programátorky a programátory, kteří se bojí žádat o práci nebo
              rozjet vlastní projekt, protože si myslí, že na to nemají.
            </Text>
            <Text mt={2}>
              Viděla jsem kolem sebe inteligentní ženy, které říkaly:
              <Text as="span" fontStyle="italic">
                {" "}
                &quot;IT zní úžasně zajímavě, v tom je budoucnost. Ale já na to
                nemám mozek.&quot;
              </Text>
            </Text>
            <Text mt={2}>
              Slyšela jsem juniory se omlouvat za to, že neumí něco, co ještě
              nikdy nedělali a nikdo jim to nevysvětlil.
            </Text>
            <Text mt={2}>
              I já jsem dlouho měla pocit, že nejsem &quot;opravdový&quot;
              programátor. Imposter syndrom mě užíral a myslela jsem si, že moje
              pracovní zkušenost mimo IT je nevýhoda. Blížila jsem se vyhoření a
              proto jsem si dala pauzu a zaměřila se na profesní a osobnostní
              růst.
            </Text>
          </Box>
          <InstagramImage
            imageLink="https://www.instagram.com/p/C3tItECL92g/"
            imageSource="https://res.cloudinary.com/doqtwlcxw/image/upload/laptop-1_bkznm9.png"
            imageAlt="corner of a monitor with code on it with iced coffee next to it"
          />
        </Box>
        <div className={styles.paragraphRight}>
          <Box className={styles.rightText}>
            <Text mt={2}>
              Začala jsem na sobě pracovat a mluvit o této problematice s lidmi
              z oboru. Postupně jsem přijala, že v IT se budu učit pořád,
              získala jsem sebevědomí a naučila jsem se navigovat neznámé
              situace. Zjistila jsem, že právě v mých zkušenostech mimo IT je
              moje síla a díky tomu můžu nabídnout jedinečný skillset.
            </Text>
            <Text mt={2}>
              Věřím, že v IT může uspět každý, kdo má zájem, pokoru a
              vytrvalost. Proto se snažím zvyšovat povědomí o možnostech cesty
              do IT, včetně toho, jak se na switch připravit a cestu si užít.
            </Text>
            <Text mt={2}>
              <Link
                href="/mentoring"
                className="linkUnderline"
                rel="noopener noreferrer"
              >
                Nabízím mentoring a kariérní poradenství.
              </Link>{" "}
              Zaměřuji se na technické znalosti, na rozvoj programátorského
              myšlení a pochopení jak funguje vývoj v softwarových firmách.
              Pomáhám s přípravou na pohovory a rozvojem osobní značky, včetně
              překonání imposter syndromu a zvyšování profesního sebevědomí.
            </Text>
          </Box>
          <InstagramImage
            imageLink="https://www.instagram.com/p/CarfLGcA9K_/"
            imageSource="https://res.cloudinary.com/doqtwlcxw/image/upload/c_fill,h_800,w_800/v1691358223/content_02_ypvojv.jpg"
            imageAlt="A girl programmer next to a monitor with code on it"
          />
        </div>
        <Card mt={{ base: 10, md: 16, lg: 12 }}>
          <CardBody textAlign="center" px={{ md: 10, lg: 14 }}>
            <Text as="q" fontStyle="oblique" fontSize="md">
              A person who never made a mistake never tried anything new.
            </Text>
            <br />
            <Text as="q" fontStyle="oblique" fontSize="xs">
              Člověk, který nikdy neudělal chybu, nikdy nezkusil nic nového.
            </Text>
            <Text mt={2} fontSize="sm">
              - Albert Einstein
            </Text>
          </CardBody>
        </Card>
        <Text mt={{ base: 10, md: 16, lg: 12 }}></Text>

        <Box mt={2}>
          Technické i softskillové tipy sdílím na svém{" "}
          <Link
            href="/blog"
            className="linkUnderline"
            rel="noopener noreferrer"
          >
            blogu
          </Link>{" "}
          a na{" "}
          <Link
            href="https://www.instagram.com/marketa_willis/"
            className="linkUnderline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagramu
          </Link>{" "}
          a{" "}
          <Link
            href="https://www.linkedin.com/in/marketa-willis/"
            className="linkUnderline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedInu.
          </Link>{" "}
          Mimo mentoringu se věnuji i dalším aktivitám. Mám za sebou lektorování
          v{" "}
          <Link
            href="https://www.czechitas.cz/"
            target="_blank"
            className="linkUnderline"
            rel="noopener noreferrer"
          >
            Czechitas
          </Link>{" "}
          , jsem spoluautorem testu znalostí JavaScriptu na{" "}
          <Link
            href="https://www.startupjobs.cz/test/javascript"
            target="_blank"
            className="linkUnderline"
            rel="noopener noreferrer"
          >
            {" "}
            Startupjobs
          </Link>
          , nebo jsem se objevila v podcastu{" "}
          <Link
            href="https://junior.guru/"
            target="_blank"
            className="linkUnderline"
            rel="noopener noreferrer"
          >
            junior.guru
          </Link>{" "}
          i v{" "}
          <Link
            href="/media"
            aria-label="media appearance"
            className="linkUnderline"
          >
            dalších médiích.
          </Link>
        </Box>
      </Box>
      <Box my={[4, 6, 16]}>
        <Heading size="lg" mt={{ base: 8, lg: 10 }} mb={2}>
          Znalosti
        </Heading>
        <Text mb={6} opacity={0.75}>
          Přehled technologií, se kterými pracuji a témata kterým se věnuji.
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            // md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={12}
        >
          {skills.map((skill) => (
            <SkillsCard skill={skill} key={skill.heading} />
          ))}
        </Grid>
      </Box>
      <Box textAlign={"center"} my={[4, 6, 16]}>
        <Button
          colorScheme={"purple"}
          marginTop={[4, 4, 6]}
          as="a"
          href="/mentoring"
        >
          Více o mentoringu
        </Button>
      </Box>
    </div>
  );
};

export default About;
