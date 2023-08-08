import styles from "../styles/About.module.scss";
import Image from "next/image";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Heart, Instagram } from "../assets/Icons/icons";
import { FC } from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

interface InstagramImageProps {
  imageLink: string;
  imageSource: string;
  imageAlt: string;
}

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
            <Instagram fontSize="xl" mr={1} opacity={0.7} />
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
            Bylo léto 2019 a já jsem nastoupila do nové práce. Přebírala jsem
            místo office manažerky po jisté Klárce. Klárka mě&nbsp;představovala
            novým kolegům a&nbsp;vysvětlovala: &quot;Já&nbsp;odcházím, udělala
            jsem si&nbsp;kurzy programování a budu pracovat jako softwarový
            tester!&quot; A&nbsp;i&nbsp;když jsem byla nadšená z nové práce,
            zároveň jsem si říkala: Práce&nbsp;v&nbsp;IT?&nbsp;Po&nbsp;kurzu?
            To&nbsp;jde? To&nbsp;chci!
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <CldImage
            width="600"
            height="600"
            src="rgtalk_jtakgk"
            alt="a girl programmer lecturer smiling"
          />
        </div>
      </section>
      <section className={styles.lighter}>
        <Box className={styles.paragraphLeft}>
          <Box>
            <Text>
              A tak jsem hned začala googlit, kdože to jsou ty Czechitas, které
              dělají kurzy programování pro ženy. A za pár týdnů jsem seděla na
              své první lekci programování v C#. Neskutečně mě to nadchlo,
              kombinace kreativity, ale zároveň systematičnosti. Do práce jsem
              chodila na šestou ráno a programovala jsem, protože jsem tam měla
              extra monitor. A už mě to nepustilo. Po kurzu C# jsem v roce 2020
              absolvovala webovou Digitální Akademii Czechitas a zanedlouho nato
              jsem si našla svou první práci jako frontend vývojář.
            </Text>
            <Text mt={2}>
              Současně jsem se začala aktivně zapojovat v Czechitas, jako kouč a
              později i jako lektorka. Našla jsem tam skvělou komunitu, důvěru,
              profesionalitu i přátelství.
            </Text>
          </Box>
          <InstagramImage
            imageLink="https://www.instagram.com/p/CkIfwipjfRm/"
            imageSource="https://res.cloudinary.com/doqtwlcxw/image/upload/c_fill,h_800,w_800/v1691359480/content_03_zsq0np.png"
            imageAlt="corner of a monitor with code on it with iced coffee next to it"
          />
        </Box>
        <div className={styles.paragraphRight}>
          <Box className={styles.rightText}>
            <Text>
              Může se zdát, že tady příběh šťastně končí, ohňostroje, šampaňské.
              I já jsem si to tak představovala - udělám si kurzy, najdu si
              práci, hurá - hotovo. Vůbec mi nedošlo, že tím proměna na
              programátora teprve začíná. Oproti kurzu s trpělivým vedením
              lektorů, jasným zadáním každého úkolu a stanovenými cíli se práce
              vývojáře o dost liší.
            </Text>
            <Text mt={2}>
              Nejvíc jsem bojovala s narůstajícím imposter syndromem, pocitem,
              že mi chybí zpětná vazba, že dělám svou práci dobře a postupuji
              dost rychle. Na schůzkách jsem nevěděla, jestli se ptám podezřele
              málo, nebo jestli plácám nesmysly. Když jsem se zasekla na opravě
              bugu, celé dny jsem se bála poprosit seniora o pomoc, abych se
              &quot;neprozradila&quot;, že toho vlastně tolik neumím.
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
              I still have a little impostor syndrome… It doesn’t go away, that
              feeling that you shouldn’t take me that seriously. What do I know?
              I share that with you because we all have doubts in our abilities,
              about our power and what that power is.
            </Text>
            <Text mt={2} fontSize="sm">
              - Michelle Obama
            </Text>
          </CardBody>
        </Card>
        <Text mt={{ base: 10, md: 16, lg: 12 }}>
          Bylo to náročné období, kdy jsem se přiblížila vyhoření, ale zavčas
          jsem si dala pauzu na zotavení. Řekla jsem si:{" "}
          <Text as="q">
            Mám programování až moc ráda na to, abych si to teď úplně znechutila
            a už to nikdy nechtěla dělat.
          </Text>{" "}
          Po pauze jsem se zaměřila na práci na osobním projektu a hlavně na
          zpracování vlastních pocitů a zapracovala jsem na svém profesním
          sebevědomí. Později jsem začala své zkušenosti sdílet{" "}
          <Link
            href="https://www.instagram.com/marketa_willis/"
            className="linkUnderline"
            target="_blank"
          >
            na sociálních sítích
          </Link>{" "}
          a po rozhovorech s profesionály i &quot;newbies&quot; v IT jsem
          zjistila, že mentální nálož při změně kariéry do IT se týká snad skoro
          všech.
        </Text>
        <Text mt={2}>
          Proto nyní kromě technických tipů v programování otevírám i téma
          psychického zdraví a odolnosti. Kromě lektorování v{" "}
          <Link
            href="https://www.czechitas.cz/"
            target="_blank"
            className="linkUnderline"
          >
            Czechitas
          </Link>{" "}
          jsem se objevila jako lektor a speaker v{" "}
          <Link
            href="https://reactgirls.com/"
            target="_blank"
            className="linkUnderline"
          >
            {" "}
            ReactGirls
          </Link>
          , v podcastu{" "}
          <Link
            href="https://junior.guru/"
            target="_blank"
            className="linkUnderline"
          >
            junior.guru
          </Link>{" "}
          i v{" "}
          <Link
            href="/media"
            aria-aria-label="media appearance"
            className="linkUnderline"
          >
            dalších médiích.
          </Link>
        </Text>
      </section>
    </div>
  );
};

export default About;
