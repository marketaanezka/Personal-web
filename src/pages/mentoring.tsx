import Image from "next/image";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { offers } from "../data/offers";
import EmailForm from "../components/ContactForm/EmailForm";
import { whyMe } from "../data/whyMe";
import { situations } from "../data/situations";

const Mentoring = () => (
  <Box>
    <Heading size="lg" mb={[3, 6]}>
      Mentoring
    </Heading>
    <Box mb={[4, 8]}>
      <Heading as={"h3"} size="sm" className="font-gtBold" mb={[4, 6, 8]}>
        Poznáváte se v některé z těchto situací?
      </Heading>
      <List spacing={5} pl="4" fontStyle={"italic"}>
        {situations.map((item) => (
          <ListItem key={item.id} display="flex" alignItems={"center"}>
            &quot;
            {item.situation}
            &quot;
          </ListItem>
        ))}
      </List>
    </Box>
    <Text opacity={0.75}>
      Toto jsou situace, kterými jsem si sama prošla. Nyní se v IT pohybuji už
      řadu let, vytříbila jsem si své programovací schopnosti, získala jsem
      sebevědomí a našla jsem svou cestu. Proto jsem se rozhodla zaměřit na
      technické i soft skills konzultace.
    </Text>
    <Text mt={2} opacity={0.75}>
      Nabízím praktický mentoring IT nástrojů a frontendových technologií. Kromě
      programování se věnuji vytvoření vaší osobní značky a budování kontaktů v
      IT komunitě.
    </Text>
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={12}
      mt={[6, 12]}
    >
      {offers.map((offer) => (
        <Card key={offer.id}>
          <CardHeader pb={1}>
            <Heading
              size="xs"
              textTransform="uppercase"
              textAlign="center"
              className="font-rowdies"
              fontWeight={400}
            >
              {offer.title}
              <Text ml={"1.5"} as="span">
                {offer.icon}
              </Text>
            </Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="2">
              {offer.details.map((detail) => (
                <Box key={detail}>
                  <Text pt="2" fontSize="sm">
                    {detail}
                  </Text>
                </Box>
              ))}
            </Stack>
          </CardBody>
        </Card>
      ))}
    </Grid>
    <Box mt={[10, 20]}>
      <EmailForm
        description={
          <>
            <Text> Momentálně finalizuji formát konzultací. </Text>
            <Text>
              Pokud máte zájem, zanechte mi svůj e-mail a dám vám vědět detaily
              📨{" "}
            </Text>
          </>
        }
      />
    </Box>
    <Box my={[10, 20]}>
      <Image
        src="https://res.cloudinary.com/doqtwlcxw/image/upload/v1725034100/windowApplifting1_rf1o5l.jpg"
        alt="Mentoring"
        width={1000}
        height={400}
        loading="lazy"
        style={{ borderRadius: "10px" }}
      />
    </Box>
    <Box mb={[10, 20]}>
      <Heading as={"h3"} size="md" className="font-gtBold" mb={[4, 6, 8]}>
        Proč pracovat se mnou?
      </Heading>

      <List spacing={5} opacity={0.75}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={12}
          mt={[6, 12]}
        >
          {whyMe.map((item) => (
            <ListItem key={item.id} fontSize="lg">
              <ListIcon as={item.icon} verticalAlign={"sub"} />
              <Text as="span" fontSize={"md"}>
                {item.contents}
              </Text>
            </ListItem>
          ))}
        </Grid>
      </List>
    </Box>
    <Box my={[10, 20]}>
      <EmailForm
        description={
          <>
            <Text>
              Pokud máte zájem o konzultaci, jakmile bude připravený formát,
              pošlu vám detaily na e-mail:{" "}
            </Text>
          </>
        }
      />
    </Box>
  </Box>
);

export default Mentoring;

const questions = [
  {
    id: 1,
    question:
      "Jak to v IT chodí? Je pravda to, co vidíme v seriálech a co říkal známý ajťák?",
  },
  {
    id: 2,
    question: "Má smysl se teď učit programovat, když už všechno dělá AI?",
  },
  {
    id: 3,
    question: "Jak u studia programování vydržet a nevyhořet?",
  },
  {
    id: 4,
    question: "Jak se můžu v IT pozicích zorientovat?",
  },
  {
    id: 5,
    question: "Jaké jsou v IT mzdy, jak začít s hledáním práce a networkingem?",
  },
];
